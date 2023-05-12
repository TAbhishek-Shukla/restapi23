require('dotenv').config();
const express= require('express');
const app= express();

const mongoDb = require('./db/connect');

const PORT= process.env.PORT || 5000;

const prod_path= require('./routes/products');

app.get('/',(req,res)=>{
    res.send("Welcome to the server")
})

//using middleware or setting up route
app.use('/api/products',prod_path);

const start=async()=>{
    try{
     await mongoDb();
     app.listen(PORT,()=>{
     console.log(`linstening at port: ${PORT}`);
     });
    }
    catch(e){
        console.log(e);
    }
}

start();