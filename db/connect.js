const mongoose= require('mongoose');



const mongoDb=()=>{
    console.log('connect db called');
   return mongoose.connect(process.env.MDB_URL);
}


module.exports= mongoDb;