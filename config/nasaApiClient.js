const axios = require("axios");
require('dotenv').config();

const NASA_API_KEY = process.env.NASA_API_KEY || "";
const NASA_API_URL = process.env.NASA_API_URL || "";

const asteroidApi = axios.create({
  baseURL: NASA_API_URL,
});

asteroidApi.interceptors.request.use((config) => {
  config.params.api_key = NASA_API_KEY;
  return config;
}, (error) => {
  return Promise.reject(error);
});

module.exports = asteroidApi;
