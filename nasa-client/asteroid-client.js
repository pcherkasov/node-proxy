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

function convertToResponse({near_earth_objects}) {
  return Object.values(near_earth_objects).flatMap(date => {
    return date.map(({
                       id,
                       name,
                       estimated_diameter,
                       is_potentially_hazardous_asteroid,
                       close_approach_data
                     }) => {
      return {
        id,
        name,
        diameter: estimated_diameter.meters.estimated_diameter_min,
        is_potentially_hazardous_asteroid,
        close_approach_date_full: close_approach_data[0].close_approach_date_full,
        relative_velocity: close_approach_data[0].relative_velocity.kilometers_per_second,
      }
    });
  });
}

function getAsteroids(startDate, endDate) {
  const url = '/feed';
  const params = {
    start_date: startDate,
    end_date: endDate
  };

  return asteroidApi.get(url, {params})
    .then(response => {
      return convertToResponse(response.data);
    })
    .catch(error => {
      console.error('Error fetching asteroids:', error);
      throw error;
    });
}

module.exports = {getAsteroids};
