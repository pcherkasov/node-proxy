const { fetchMeteors } = require("../clients/nasa/asteroid");
const moment = require("moment");

function getMeteors(req, res) {
  var { from, to } = req.query;

  if (!from || !to) {
    const now = moment();
    from = now.format("YYYY-MM-DD");
    to = now.format("YYYY-MM-DD");
  }

  fetchMeteors(from, to)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
}

function wereDangerousMeteors(req, res) {
  var { from, to } = req.query;

  if (!from || !to) {
    const now = moment();
    from = now.format("YYYY-MM-DD");
    to = now.format("YYYY-MM-DD");
  }

  fetchMeteors(from, to)
    .then((result) => {
      const thereIsHazard = Array.from(result).some(item => item.is_potentially_hazardous_asteroid === true)
      res.status(200).json(thereIsHazard);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
}

function countMeteors(req, res) {
  var { from, to } = req.query;

  if (!from || !to) {
    const now = moment();
    from = now.format("YYYY-MM-DD");
    to = now.format("YYYY-MM-DD");
  }

  fetchMeteors(from, to)
    .then((result) => {
      const meteorsAmount = Array.from(result).length;
      res.status(200).json(meteorsAmount);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
}

module.exports = { getMeteors, wereDangerousMeteors, countMeteors };
