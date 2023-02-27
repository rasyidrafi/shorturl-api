const axios = require('axios').default;
const cheerio = require('cheerio');
const { SHORTURLAT_URL } = require('../consts');

class ShorturlatWrapper {
    parseHTML(html) {
        const $ = cheerio.load(html);
        const url = $("#shortenurl").val();

        if (!url) {
            throw new Error("Failed to parse HTML");
        }

        return url.startsWith("http") ? url : `http://${url}`;
    }

    shortenLink(link) {
        const param = new URLSearchParams();
        param.append('u', link);

        return axios
            .post(
                SHORTURLAT_URL,
                param
            )
            .then((response) => {
                return {
                    url: this.parseHTML(response.data),
                    data: null,
                };
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }
}

module.exports = ShorturlatWrapper;