const axios = require('axios').default;
const { API_TINYURL, TINYURL_URL } = require('../consts');

class TinyurlWrapper {
    apiKey = API_TINYURL();
    type = null;

    constructor(type = 'tinyurl') {
        this.type = type;
    }

    getProvider() {
        return this.type == "tinyurl" ? "tinyurl.com" : this.type == "tinyone" ? "tiny.one" : "rotf.lol"
    }

    shortenLink(link) {
        return axios
            .post(
                TINYURL_URL,
                {
                    url: link,
                    domain: this.getProvider(),
                    expires_at: null,
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                }
            )
            .then((response) => {
                return {
                    url: response.data.data.tiny_url,
                    data: response.data,
                };
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }
}

module.exports = TinyurlWrapper;