const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/router");

const app = express();

const startServer = port => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/", router);

  app.listen(port);
  console.log("Server was started at http://localhost:" + port);
};

module.exports = startServer;
