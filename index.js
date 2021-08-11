const express = require('express');
require('dotenv').config()
const getLanguagesAPI = require('./Api/controllers/BotController');

const app = express();
const { PORT } = process.env;

app.get('/', getLanguagesAPI);

app.listen(3000, () => console.log(`Servidor Online ${ PORT }`));
