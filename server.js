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

/****************** Routes ******************/
app.use('/api', indexProviders);

app.post('/products', async(req, res) => {
    const { providerUuid, name, price, rating } = req.body

    try {
        const provider = await Provider.findOne({ where: {uuid: providerUuid} })

        const product = await Product.create({ name, price, rating, providerId: provider.id })
        return res.status(200).json(product)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.findAll({ include: 'provider' })
        return res.status(200).json(products)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
})

/****************** Actice Server ******************/
app.listen(port, async () => {
    console.log(`ServerOn http://localhost:${port}`)
    await sequelize.authenticate()
    console.log('Database Connected');
});