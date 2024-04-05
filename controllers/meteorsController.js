const { fetchMeteors } = require("../clients/nasa/asteroid");

function getMeteors(req, res) {
  fetchMeteors('2024-03-25', '2024-03-25')
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
}

module.exports = getMeteors;
