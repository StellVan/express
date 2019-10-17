const mongoose = require("mongoose");

const connectToDB = url => {
  mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch(err => {
      console.error("Database connection error");
    });
};

module.exports = connectToDB;
