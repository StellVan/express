const fs = require("fs");
const idGenerator = require("../../assets/idGeneratorUser");

const createUser = (req, res) => {
  req.body["id"] = idGenerator();
  let userData = req.body;
  let readStream = fs.createReadStream(`./src/db/users/users.json`);

  readStream.on("data", data => {
    let obj = JSON.parse(data);
    obj.push(userData);
    let json = JSON.stringify(obj);
    let writeStream = fs.createWriteStream(`./src/db/users/users.json`);
    writeStream.write(json, "UTF8");
    res.send({
      status: "success",
      user: req.body
    });
    writeStream.on("error", err => {
      console.log(err);
    });
  });
  readStream.on("error", err => {
    console.log(err);
  });
};

module.exports = createUser;
