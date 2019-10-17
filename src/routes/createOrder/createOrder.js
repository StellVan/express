const fs = require("fs");
const idGeneratorProduct = require("../../assets/idGeneratorProduct");
const allProductsPath = "./src/db/products/all-products.json";

const createOrder = (req, res) => {
  let order = req.body;
  let orderProductsList = order.products;
  let generatedId = idGeneratorProduct();

  let readStreamUser = fs.createReadStream(`./src/db/users/users.json`);
  readStreamUser.on("data", data => {
    let users = JSON.parse(data);
    let user = users.find(el => el.id === order.user);
    if (user === undefined) {
      res.send({ status: "user not found" });
    } else {
      let readStreamProducts = fs.createReadStream(allProductsPath);
      readStreamProducts.on("data", data => {
        let products = JSON.parse(data);
        let productsIdsArray = [];
        order.products.forEach(orderId => {
          products.forEach(productsId => {
            if (orderId === productsId.id) {
              productsIdsArray.push(productsId.id);
            }
          });
        });
        if (productsIdsArray.length === orderProductsList.length) {
          res.send({
            status: "success",
            order: {
              id: generatedId,
              user: order.user,
              products: productsIdsArray,
              deliveryType: "delivery",
              deliveryAdress: "<deliveryAdressText>"
            }
          });
        } else {
          res.send({ status: "failed", order: null });
        }
      });
      readStreamProducts.on("error", err => {
        console.log(err);
      });
    }
  });
  readStreamUser.on("error", err => {
    console.log(err);
  });
};

module.exports = createOrder;
