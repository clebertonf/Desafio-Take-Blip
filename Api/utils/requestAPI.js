const fetch = require("node-fetch");

const requestAPI =  async(userName, quantityOfRepos) => {
    return await fetch(`https://api.github.com/users/${userName}/repos?per_page=${quantityOfRepos}`)
    .then((data) => data.json()).then((data) => data)
    .catch((err) => {
        console.error(err);
        return err;
    });
};

module.exports = requestAPI;
