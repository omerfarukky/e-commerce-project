const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(7),
  description: Joi.string().required().min(7),
  categoryId: Joi.number().integer().required(),
  price: Joi.number().integer().min(1),
  stock: Joi.number().integer().min(1),
});

const updateValidation = Joi.object({
  name: Joi.string().required().min(7),
  description: Joi.string().required().min(7),
  categoryId: Joi.number().integer().required(),
  price: Joi.number().integer().required().min(1),
  stock: Joi.number().integer().required().min(1),
});

module.exports = {
  createValidation,
  updateValidation,
};
