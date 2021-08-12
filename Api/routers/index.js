const router = require('express').Router();
const BotRouter = require('./BotRouter');

router.use('/', BotRouter);

module.exports =  router;
