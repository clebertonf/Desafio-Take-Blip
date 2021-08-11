const moment = require('moment');
const Api = require('../utils/requestAPI');

const getLanguagesAPI = async (_req, resp) => {
  const repositories = await Api();

  const reposCharp = repositories.filter((value) => value.language === 'C#');

  const sortRepposTake = reposCharp
    .sort((a, b) => (a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : 0));

  const orderedRepositories = sortRepposTake.map(({
    created_at, name, language, owner: { avatar_url }, description, ...others
  }) => ({
    date: moment(created_at).format('DD-MM-YYYY'),
    name,
    language,
    avatar_url,
    description,
  }));

  const FiveRepositories = orderedRepositories.slice(0, 5);

  resp.status(200).json({ languages: FiveRepositories });
};

module.exports = { getLanguagesAPI };
