const express = require('express');
const {getAsteroids} = require("./clients/nasa/asteroid");

const app = express();
const port = process.env.PORT || 3000;

app.get("/meteors", (req, res) => {

    getAsteroids('2024-03-25', '2024-03-25')
        .then((result) => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
