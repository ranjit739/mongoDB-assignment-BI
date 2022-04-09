const express=require('express');
const route=express.Router();
const product=require('../model/product');
const mongoose = require('mongoose');

route.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is a product get request for local host'
    })
})
route.post('/',(req,res,next)=>{
    const product=new product({
        _id:mongoose.Types.ObjectId,
        productName:req.body.productName,
        
        price:req.body.price
        

    })

    product.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newproduct:result
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