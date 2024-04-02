require('dotenv').config();

const axios = require('axios');

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

function getAsteroids(startDate, endDate) {
    const url = '/feed';
    const params = {
        start_date: startDate,
        end_date: endDate
    };

    return asteroidApi.get(url, {params})
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching asteroids:', error);
            throw error;
        });
};

module.exports = {getAsteroids};
