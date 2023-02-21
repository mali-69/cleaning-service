const axios = require('axios');

async function postData(url, data) {
    try {
        const response = await axios.post(
            url,
            data
        );
        console.log(data);
        console.log(response.data);
        console.log(response.status);
        return response;
    } catch (error) {
        if (error.response) {
            console.error(error.response.data);
            return error.response.data;
        }
        console.error(error);
        return null;
    }
}

module.exports = {
    postData
};

