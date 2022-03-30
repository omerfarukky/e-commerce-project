const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("e-commerce", "postgres", "12345", {
  dialect: "postgres",
});

module.exports = sequelize;
