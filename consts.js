require("dotenv").config();

module.exports = {
    API_CUTTLY: () => process.env.API_CUTTLY,
    CUTTLY_URL: "https://cutt.ly/api/api.php",
    API_BITLY: () => process.env.API_BITLY,
    BITLY_URL : "https://api-ssl.bitly.com/v4/shorten",
    API_TINYURL: () => process.env.API_TINYURL,
    TINYURL_URL: "https://api.tinyurl.com/create",
    SHORTURLAT_URL : "https://www.shorturl.at/shortener.php",
}