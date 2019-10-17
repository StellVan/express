const express = require("express");
const getProducts = require("./getProducts/getProducts");
const createUser = require("./createUser/createUser");
const getUser = require("./getUser/getUser");
const createOrder = require("./createOrder/createOrder");

const apiRoutes = express.Router();

apiRoutes
  .get("/products", getProducts)
  .post("/users", createUser)
  .get("/users", getUser)
  .post("/orders", createOrder);

module.exports = apiRoutes;
