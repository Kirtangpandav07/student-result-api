var express = require('express');
var router = express.Router();
const STUDENT =require('../model/student')
/* GET users listing. */




router.get('/all',async function(req, res, next) {
  try {
    const data = await STUDENT.find()
    res.status(200).json({
      status:"suceess",
      message:"all user found",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message,
    })
  }
});


router.post('/add',async function(req, res, next) {
  try {
    if (!req.body.firstname ||!req.body.lastname ||!req.body.field ||!req.body.gender ||!req.body.email ||!req.body.maths ||!req.body.science ||!req.body.english||!req.body.gujrati||!req.body.hindi) {
      throw new Error("please enter valid fields")
    }
    const data = await STUDENT.create(req.body)
    res.status(200).json({
      status:"suceess",
      message:"user created",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message,
    })
  }
});


router.delete('/delete/:id',async function(req, res, next) {
  try {
   await STUDENT.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status:"suceess",
      message:"user deleted",
    })
  } catch (error) {
    res.status(404).json({
      status:"fail",
      message:error.message,
    })
  }
});


router.patch('/update/:id',async function(req, res, next) {
  try {
    await STUDENT.findByIdAndUpdate(req.params.id,req.body)
     res.status(200).json({
       status:"suceess",
       message:"user updated",
     })
   } catch (error) {
     res.status(404).json({
       status:"fail",
       message:error.message,
     })
   }
});

module.exports = router;
