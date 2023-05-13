const mongoose= require('mongoose');



const mongoDb=()=>{
    console.log('connect db called',process.env.MDB_URL);
   return mongoose.connect(process.env.MDB_URL);
}


module.exports= mongoDb;