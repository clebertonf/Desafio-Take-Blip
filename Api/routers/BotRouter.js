const router = require('express').Router();
const BotController = require('../controllers/BotControllers');

router.get('/', BotController.getLanguagesAPI);

module.exports =  router;
