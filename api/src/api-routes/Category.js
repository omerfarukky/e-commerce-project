const express = require("express");
const { index,create,update,deleteCate } = require("../controllers/Category");
const router = express.Router();

router.route("/").get(index);
router.route("/").post(create);
router.route("/:id").patch(update);
router.route("/:id").delete(deleteCate);

module.exports = router;
