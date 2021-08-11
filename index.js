const express = require('express');
require('dotenv').config()

const app = express();
const { PORT } = process.env;

app.use(require('./Api/routers'))

app.listen(3000, () => console.log(`Servidor Online ${ PORT }`));
