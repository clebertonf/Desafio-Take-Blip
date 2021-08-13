const rescue = require('express-rescue');
const botServices = require('../services/BotServices');

const getLanguagesAPI = rescue(async (_req, resp) => {
  const takeBlip = 'takenet'
  const quantity = 150;
  const languagesAPI = await botServices.getLanguagesAPI(takeBlip, quantity);
  
  return resp.status(200).json(languagesAPI);
});

module.exports = { getLanguagesAPI }
