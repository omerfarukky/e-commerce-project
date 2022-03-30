const Product = require("../models/Products");
const client = require("../config/elasticClient");
const Category = require("../models/Category");
const User = require("../models/Users");

const insert = async (data) => {
  const product = await Product.create(data);
  await client.index({
    index: "products",
    id: product.id,
    body: {
      ...product.dataValues,
    },
  });
  return product;
};

const list = (id) => {
  if (id){
    return Product.findAll(
      { where: { categoryId: id } },
      { include: Category }
    );
  }
  return Product.findAll( {include: [{ model: User, attributes: ["id", "firstName", "email"] }, { model: Category }] });
};

const productDetail = (dataId) => {
  return Product.findAll({ where: { id: dataId }, include: [{ model: User, attributes: ["id", "firstName", "email"] }, { model: Category }] });
};

const modify = async (data, id) => {
  try {
    await client.update({
      index: "products",
      refresh: true,
      id: id,
      body: {
        doc: {
          ...data,
        },
      },
    });
  } catch (error) {
    console.log(error)
  }
  return Product.update(data, { where: { id } }, { new: true });
};

const deleteProduct = async (id) => {
  const productID = await Product.findAll({ where: { id } });
  await client.delete({
    index: "products",
    refresh: true,
    id: id,
  });
  await Product.destroy({ where: { id } });
  return productID;
};

module.exports = {
  list,
  insert,
  modify,
  productDetail,
  deleteProduct,
};
