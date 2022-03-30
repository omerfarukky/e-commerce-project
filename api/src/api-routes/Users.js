const express = require("express");
const validate = require("../middlewares/validate"); // Validate Middleware
const schemas = require("../validations/Users"); // validations
const authenticate = require("../middlewares/authenticate");
const { create, login,productList,resetPassword,update } = require("../controllers/Users");
const router = express.Router();

router.route("/register").post(validate(schemas.createValidation), create);
router.route("/update").patch(authenticate,validate(schemas.updateValidation), update);
router.route("/login").post(validate(schemas.loginValidation), login);
router.route("/products").get(authenticate,productList);
router.route("/reset-password").post(validate(schemas.resetPasswordValidation),resetPassword)

module.exports = router;
