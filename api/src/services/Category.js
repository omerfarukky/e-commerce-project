const Category = require("../models/Category");

const insert =  (data) => {
  return Category.create(data);;
};

const list = () => {
  return Category.findAll();
};

const modify = async (data, id) => {
  return Category.update(data, { where: { id } });
};

const deleteCategory = async (id) => {
  return Category.destroy({ where: { id } });
};

module.exports = {
  list,
  insert,
  modify,
  deleteCategory,
};
