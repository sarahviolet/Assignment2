import mongoose from 'mongoose'
//const mongoose = require('mongoose');
let ProductModel = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
}, {
    collection: 'product'
});
export default mongoose.model('Marketplace', ProductModel);
