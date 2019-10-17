const startServer = require("./src/server");
const connectToDB = require("./src/db/connectToDB");
const { port, databaseUrl } = require("./config");

startServer(port);
