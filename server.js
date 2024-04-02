const { getAsteroids } = require("./nasa-client/asteroid-client");

getAsteroids('2024-03-25', '2024-03-25')
    .then((result) => {
        console.log('Asteroids: ' + JSON.stringify(result, null, 2));
    })
    .catch(error => {
        console.log('Error: ' + error);
    });
