const express=require('express');
const route=express.Router();
const Student=require('../model/student');
const mongoose = require('mongoose');

route.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is a student get request for local host'
    })
})
route.post('/',(req,res,next)=>{
    const student=new Student({
        _id:mongoose.Types.ObjectId,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender

    })

    student.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
module.exports=route;