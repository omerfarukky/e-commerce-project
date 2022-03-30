const User = require("../models/Users");
const Category = require("../models/Category");
const Product = require("../models/Products");

const insert = (data) => {
  const user = User.create(data);
  return user;
};

const loginUser = (loginData) => {
  const { email, password } = loginData;
  return User.findAll({ where: { password, email } });
};

const listProducts = (id) => {
  return Product.findAll({
    where: { userId: id },
    include: [{ model: Category }],
  });
};

const modify = async (data, pass) => {
  return User.update(pass, { where: data });
};

module.exports = {
  insert,
  listProducts,
  loginUser,
  modify,
};
