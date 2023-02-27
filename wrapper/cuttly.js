const axios = require('axios').default;
const { renderParam } = require('../helper');
const { API_CUTTLY, CUTTLY_URL } = require('../consts');

class CuttlyWrapper {
    apiKey = API_CUTTLY();

    shortenLink(link) {
        const param = {
            key: this.apiKey,
            short: link,
        };

        return axios
            .get(renderParam(param, CUTTLY_URL))
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }
}

module.exports = CuttlyWrapper;