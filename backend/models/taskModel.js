const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
        task:String,
        isCompleted:{
            type:Boolean,
            default:false
        }
})

module.exports = mongoose.model("Task", TaskSchema)

