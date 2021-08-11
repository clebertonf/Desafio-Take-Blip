const express = require('express');
const getLanguagesAPI = require('./Api/controllers/BotController');

const app = express();

app.get('/', getLanguagesAPI);

app.listen(3000, () => console.log('Servidor Online'));
