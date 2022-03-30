const { Model, DataTypes } = require("sequelize")
const sequelize = require("../loaders/db")
class Category extends Model { }

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      
}, {
	sequelize,
	modelName: "category"
})

module.exports = Category