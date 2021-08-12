const rescue = require('express-rescue');
const botServices = require('../services/BotServices');

const getLanguagesAPI = rescue(async (_req, resp) => {

  const languagesAPI = await botServices.getLanguagesAPI();
  
  return resp.status(200).json(languagesAPI);
});

module.exports = { getLanguagesAPI }
