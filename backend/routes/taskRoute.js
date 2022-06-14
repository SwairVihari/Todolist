const express = require("express");
const router = express.Router();
const {taskadd, getAlltask, deleteItem} = require("../controllers/taskController");

router.route("/addtask").post(taskadd)
router.route("/getalltask").get(getAlltask)
router.route("/delete").post(deleteItem)

module.exports = router