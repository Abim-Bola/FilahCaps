//jshint esversion:6
require('dotenv').config();
const express = require("express");
const Product = require("../database/productModel");



const userController = {

    allProducts(req, res){
        Product.find({}, function(err, products){
      if(err){
          res.send(err);
      }else{
          res.render("allproducts", {products: products});
      }
        });
    }

};


module.exports = userController;