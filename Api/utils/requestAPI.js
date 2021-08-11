const fetch = require("node-fetch");

const requestAPI =  async() => {
    return await fetch('https://api.github.com/users/takenet/repos?per_page=200')
    .then((data) => data.json()).then((data) => data)
    .catch((err) => {
        console.error(err);
        return err;
    });
};

module.exports = requestAPI;
