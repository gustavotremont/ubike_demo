const express = require('express');
const routes = express.Router();

const providers = require("../controllers/providers");

// routes.post("/providers/", providers.createProvider );
routes.get("/providers/", providers.getProviders );
routes.get("/providers/:uuid", providers.getProviderByUUID );
// routes.put("/providers/:uuid", providers.getProviderByUUID );
// routes.delete("/providers/:uuid", providers.getProviderByUUID );

module.exports = routes;