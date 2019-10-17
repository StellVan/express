const fs = require("fs");

const getUser = (req, res) => {
  const id = req.query.id;
  fs.readFile(`./src/db/users/users.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let users = JSON.parse(data);
      let user = users.find(el => el.id === id);
      if (user === undefined) {
        res.send({ status: "user not found" });
      } else {
        res.send(user);
      }
    }
  });
};

module.exports = getUser;
