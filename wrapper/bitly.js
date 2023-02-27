const axios = require('axios').default;
const { API_BITLY, BITLY_URL } = require('../consts');

class BitlyWrapper {
    apiKey = API_BITLY();

    shortenLink(link) {
        return axios
            .post(
                BITLY_URL,
                {
                    long_url: link,
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                }
            )
            .then((response) => {
                return {
                    url: response.data.link,
                    data: response.data,
                };
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }
}

module.exports = BitlyWrapper;