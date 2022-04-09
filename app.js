const express=require('express');
const app=express();
const studentRoute=require('./api/route/student');
const quoteSchema=require('./api/route/quote');
const productSchema=require('./api/route/product');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://ranjit123:ranjit1234@cluster0.vrj4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log('connection failed');
});
mongoose.connection.on('connected',connected=>{
    console.log('connected with database...');

});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/quote',quoteSchema);
app.use('/student',studentRoute);
app.use('/product',productSchema);
app.use((req,res,next)=>{
    res.status(200).json({
        msg:'app is runnig local host'
    })
})
module.exports=app;