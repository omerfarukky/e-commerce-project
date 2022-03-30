const { Model, DataTypes } = require("sequelize");
const sequelize = require("../loaders/db");
const logger = require("../scripts/logger/Products");
const Category = require("./Category");
const User = require("./Users");
class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "category",
        key: "id",
      },
    },
    price: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "product",
  }
);

Product.belongsTo(Category, { foreignKey: "categoryId" });
Product.belongsTo(User, { foreignKey: "userId" });

Product.addHook("afterCreate", "notifyUsers", (doc) => {
  logger.log({
    level: "info",
    message: doc.dataValues,
  });
});

module.exports = Product;
