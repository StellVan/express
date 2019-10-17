const DBPassword = "varya";

const config = {
  port: 3000,
  DBPassword,
  databaseUrl: `mongodb+srv://StellVan:${DBPassword}@stellvancluster-bdmvq.mongodb.net/test?retryWrites=true&w=majority`
};

module.exports = config;
