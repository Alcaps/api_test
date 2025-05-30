const express = require('express');
const morgan = require('morgan');
const moment = require('moment');
const usuariosRouter = require('./src/routes/usuario-router');
const monedaRouter = require('./src/routes/moneda-routers');
const criptomonedasRouter = require('./src/routes/critpomonedas-routers'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

morgan.token('dateTz', () => moment().format('DD/MMM/YYYY:HH:mm:ss ZZ'));

app.use(morgan('[:dateTz] ":method :url HTTP/:http-version" :status :res[content-length] ":user-agent" - :response-time ms'));

// Mapeo de rutas
app.use('/usuarios', usuariosRouter);
app.use('/api', monedaRouter);
app.use('/api', criptomonedasRouter); 

module.exports.app = app;
