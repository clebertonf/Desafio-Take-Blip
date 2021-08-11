const express = require('express');
require('dotenv').config()
const errorMiddleware = require('./Api/middlewares/errorMiddleware');

const app = express();
const { PORT } = process.env;

app.use(require('./Api/routers'));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Servidor Online ${ PORT }`));
