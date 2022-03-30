const express = require("express");
const { index } = require("../controllers/Search");
const router = express.Router();

router.route("/").get(index);

module.exports = router;
