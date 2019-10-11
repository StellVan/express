const express = require("express");
const fs = require("fs");
const { port } = require("./config");

const app = express();

const allProductsPath = "./src/db/products/all-products.json";
fs.readFile(allProductsPath, (err, data) => {
  let allProducts = JSON.parse(data);
});

app.get("/products", (req, res) => {
  const readStream = fs.createReadStream(allProducts);
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  readStream.pipe(res);
});

app.get("/products/:id", (req, res) => {
  let a = req.params.id;

  res.send(allProducts);
});

app.listen(port);
