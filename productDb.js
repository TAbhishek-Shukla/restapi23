require('dotenv').config();
const connectDb = require('./db/connect');
const Product = require('./models/product');

const mongoose = require('mongoose')

const Productjson = require('./products.json');



const start = async () => {
    try {
        await connectDb(process.env.MDB_URL);
         await Product.deleteMany();
        await Product.create(Productjson);
        console.log('Success');
    }
    catch (e) {
        console.log(e);
    }
}




start();