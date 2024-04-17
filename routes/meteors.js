const express = require("express");
const { getMeteors, wereDangerousMeteors, countMeteors } = require("../controllers");

const meteorRoutes = express.Router();

meteorRoutes.get("/meteors", getMeteors);
meteorRoutes.get("/meteors/were-dangerous-meteors", wereDangerousMeteors);
meteorRoutes.get("/meteors/count", countMeteors);

module.exports = meteorRoutes;
