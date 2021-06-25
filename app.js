const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const routes = require('./routes');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(helmet());
app.use('/', routes);


if (process.env.ENVIRONMENT == 'dev')
    app.listen(process.env.PORT, () => console.log(`\n> Executando API na porta: ${process.env.PORT} \n`))

module.exports = app;