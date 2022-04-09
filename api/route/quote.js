const express=require('express');
const route=express.Router();
const Quote=require('../model/quote');
const mongoose = require('mongoose');

route.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is a quote get request for local host'
    })
})
route.post('/',(req,res,next)=>{
    const quote=new Quote({
        _id:mongoose.Types.ObjectId,
        name:req.body.name,
        
        gender:req.body.gender

    })

    quote.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newquote:result
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