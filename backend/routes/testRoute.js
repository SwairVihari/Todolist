const express = require("express");
const router = express.Router();
const {test} = require("../controllers/testController");

router.route("/test").get(test)

module.exports = router