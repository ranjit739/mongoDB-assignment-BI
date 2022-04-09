const mongoose=require('mongoose');
const quoteSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    
    gender:String
})
module.exports=mongoose.model('Quote',quoteSchema);