//jshint esversion:6
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    
productName: {
    type: String,
    required: true
},

price: {
    type: String,
    required: true
},

description: {
    type: String,
    required: true
},

image: {
    type: String,
    required: true
},

date: {
type: Date,
default: Date.now 
},

image_id: {
type: String,
required: true
}



});





const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
