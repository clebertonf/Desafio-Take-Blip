const express = require('express');
require('dotenv').config()

const app = express();
const { PORT } = process.env;

app.use(require('./Api/routers'))

app.listen(PORT, () => console.log(`Servidor Online ${ PORT }`));
