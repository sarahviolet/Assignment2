import mongoose from 'mongoose'
//const mongoose = require('mongoose');
let CategoryModel = mongoose.Schema({
    name: String
}, {
    collection: 'category'
});
module.exports = mongoose.model('Marketplace', CategoryModelModel);
