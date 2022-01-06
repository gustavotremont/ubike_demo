const express = require('express');
const routes = express.Router();

const products = require("../controllers/products");

routes.get("/products/", products.getProducts );
routes.get("/products/:uuid", products.getProductByUUID );

module.exports = routes;