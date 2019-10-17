const fs = require("fs");

const allProductsPath = "./src/db/products/all-products.json";

const getProducts = (req, res) => {
  if (!req.query.id) {
    const readStream = fs.createReadStream(allProductsPath);
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    readStream.pipe(res);
  } else {
    let idsArray = req.query.id;
    fs.readFile(allProductsPath, "utf8", (err, data) => {
      if (err) {
        console.log("error");
      } else {
        let productItems = JSON.parse(data);
        let productsArray = [];

        idsArray.forEach(id => {
          productItems.forEach(product => {
            if (product.id === +id) {
              productsArray.push(product);
            }
          });
        });
        if (productsArray.length > 0) {
          res.send(productsArray);
        } else {
          res.send({ status: "no products", products: [] });
        }
      }
    });
  }
};

module.exports = getProducts;
