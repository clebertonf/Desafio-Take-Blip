const moment = require('moment');
const Api = require('../utils/requestAPI');
const { notFound } = require('@hapi/boom');
const rescue = require('express-rescue');

const getLanguagesAPI = rescue(async (_req, resp) => {
  const repositories = await Api();
  
  if(repositories.message) 
    throw notFound('Algum erro aconteceu com a API!, tente novamente mais tarde.');

  const repositoriesCsharp = repositories
    .filter((repository) => repository.language === 'C#');
 
  const sortrepositories = repositoriesCsharp
    .sort((a, b) => (a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : 0));

  const orderedRepositories = sortrepositories.map(({
    created_at, full_name, language, owner: { avatar_url }, description, ...others
  }) => ({
    date: moment(created_at).format('DD-MM-YYYY'),
    full_name,
    language,
    avatar_url,
    description,
  })).slice(0, 5);

  return resp.status(200).json({ languages: orderedRepositories });
});

module.exports = { getLanguagesAPI };