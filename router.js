require("dotenv").config();
const router = require("express").Router(),
  { isUrl } = require("./helper");

const Cuttly = require("./wrapper/cuttly");
const Bitly = require("./wrapper/bitly");
const Tinyurl = require("./wrapper/tinyurl");
const Shorturlat = require("./wrapper/shorturlat");

router.get("/", (_, res) => res.render("index"));

router.get("/api", (req, res) => {
  // get url parameter
  const link = ("" + req.query.link).trim();
  if (!link || !req.query.link) {
    return res.error("link parameter required", 400);
  }

  //   validate link is a valid link
  if (!isUrl(link)) {
    return res.error("invalid url", 400);
  }

  try {
    const provider = req.query.provider;
    let API = null;
    switch (provider) {
      case "bitly":
        API = new Bitly();
        break;

      case "shorturlat":
        API = new Shorturlat();
        break;

      case "tinyurl":
      case "tinyone":
      case "rotf":
        API = new Tinyurl(provider);
        break;

      default:
        API = new Cuttly();
        break;
    }

    const result = API.shortenLink(link);
    res.success({
      message: "success",
      provider: provider,
      data: result,
    })
  } catch (error) {
    console.error(error);
    res.error("error", 500);
  }
});

module.exports = router;
