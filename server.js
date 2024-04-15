const express = require('express');
const { meteorRoutes } = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(meteorRoutes);

app.listen(port, () => {
  console.info(`Server is running on port ${ port }`);
});
