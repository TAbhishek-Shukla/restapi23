const mongoose= require('mongoose');



const mongoDb=()=>{
   return mongoose.connect(process.env.MDB_URL);
}


module.exports= mongoDb;
