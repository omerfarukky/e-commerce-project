const express = require("express");
const validate = require("../middlewares/validate"); // Validate Middleware
const schemas = require("../validations/Products"); // validations
const authenticate = require("../middlewares/authenticate");
const { index,create,detail,update,deletePro,categoryIndex } = require("../controllers/Products");
const router = express.Router();

router.route("/").post(authenticate,validate(schemas.createValidation),create);
router.route("/").get(index);
router.route("/category").get(categoryIndex);
router.route("/:id").get(detail);
router.route("/:id").patch(authenticate,validate(schemas.updateValidation),update);
router.route("/:id").delete(authenticate,deletePro);

module.exports = router;
