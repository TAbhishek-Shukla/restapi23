const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:[ true,'Price must be provided']
    },
    featured:{
        type:String,
        default: false
    },
    rating:{
        type:Number,
        default:7.9
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type: String,
        enum:{
            values:['dell','apple','mi','samsung'],
            message:`{VALUE} is not supported`
        },
    },
    
});

module.exports= mongoose.model('Product',productSchema);