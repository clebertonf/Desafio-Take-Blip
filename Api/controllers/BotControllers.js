const moment = require('moment');
const Api = require('../utils/requestAPI');

const getLanguagesAPI = async (_req, resp) => {
  const reposTake = await Api();

  const reposCharp = reposTake.filter((value) => value.language === 'C#');

  const sortRepposTake = reposCharp
    .sort((a, b) => (a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : 0));

  const verify = sortRepposTake.map(({
    created_at, name, language, owner: { avatar_url }, description, ...othres
  }) => ({
    a: moment(created_at).format('DD-MM-YYYY'),
    b: name,
    c: language,
    d: avatar_url,
    e: description,
  }));

  const response = verify.slice(0, 5);

  resp.status(200).json({ languages: response });
};

module.exports = { getLanguagesAPI };
