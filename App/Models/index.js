const dbConfig = require("../Configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
console.log(sequelize);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require("./employee.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;