const { convertToMeteor } = require("../../converters");

const asteroidApi = require("../../config");

function fetchMeteors(startDate, endDate) {
  const url = '/feed';
  const params = {
    start_date: startDate,
    end_date: endDate,
  };

  return asteroidApi.get(url, { params })
    .then(response => {
      console.info(`Fetch asteroids from: ${ params.start_date } to: ${ params.end_date }`)
      return convertToMeteor(response.data);
    })
    .catch(error => {
      console.error('Error fetching asteroids:', error);
      throw error;
    });
}

module.exports = { fetchMeteors };
