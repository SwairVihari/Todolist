const catchAsyncErrors = require("../middleware/catchAsyncError")
const task = require('../models/taskModel')
exports.taskadd = catchAsyncErrors(async(req,res,next) =>{
    console.log(req.body)
    const taskitem = await task.create(req.body);

    res.status(200).json({
        success:true,
        taskitem
        })
})

exports.getAlltask = catchAsyncErrors(async(req,res,next) =>{
    console.log(req.body)
    const taskitem = await task.find();

    res.status(200).json({
        success:true,
        taskitem
        })
})

exports.deleteItem = catchAsyncErrors(async(req,res,next) =>{
    const id = req.body
    console.log(id)
    await task.findByIdAndDelete(id)
})
