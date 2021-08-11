const router = require('express').Router();
const BotController = require('../controllers/BotControllers');

router.get('/', BotController);

module.exports =  router;