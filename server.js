/****************** Nodejs Dependencies ******************/
const express = require('express');
const logger = require('morgan');
const path = require('path');
require('dotenv').config();

/****************** Enable Express ******************/
const app = express();
const port = process.env.PORT || 5000;

/****************** Express Settings ******************/
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
});