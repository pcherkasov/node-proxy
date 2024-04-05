const express = require("express");
const { getMeteors } = require("../controllers");

const meteorRoutes = express.Router();

meteorRoutes.get("/meteors", getMeteors)

module.exports = meteorRoutes;
