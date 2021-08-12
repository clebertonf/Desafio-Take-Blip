const Api = require('../utils/requestAPI');
const { notFound } = require('@hapi/boom');
const moment = require('moment');
const rescue = require('express-rescue');

const getLanguagesAPI = rescue(async (_req, resp) => {
  const repositories = await Api();

  if(repositories.message) 
    throw notFound('Algum erro aconteceu com a API!, tente novamente mais tarde.');

  const repositoriesCsharp = repositories
    .filter((repository) => repository.language === 'C#')
     .sort((a, b) => (a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : 0));

  const orderedRepositories = repositoriesCsharp.map(({
    full_name, description, owner: { avatar_url }, created_at, ..._others
  }) => ({
    full_name,
    description,
    avatar_url,
    date: moment(created_at).format('DD-MM-YYYY'),
  })).slice(0, 5);

  const objectWithRepositories = Object.assign({}, orderedRepositories);

  return resp.status(200).json(objectWithRepositories);
});


module.exports = { getLanguagesAPI }