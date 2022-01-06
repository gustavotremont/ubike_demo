/****************** Nodejs Dependencies ******************/
const express = require('express');
const logger = require('morgan');
const path = require('path');
require('dotenv').config();

const { sequelize, Provider, Product } = require('./models')

/****************** Enable Express ******************/
const app = express();
const port = process.env.PORT || 5000;

/****************** Express Settings ******************/
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));

/****************** Import routes ******************/
const indexProviders = require('./routes/providers');
const indexProducts = require('./routes/products');

/****************** Routes ******************/
app.use('/api', indexProviders);
app.use('/api', indexProducts);

/****************** Actice Server ******************/
app.listen(port, async () => {
    console.log(`ServerOn http://localhost:${port}`)
    await sequelize.authenticate()
    console.log('Database Connected');
});