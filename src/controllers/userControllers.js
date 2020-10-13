//jshint esversion:6
require('dotenv').config();
const express = require("express");
const session = require('express-session');
const Product = require("../database/productModel");
const Cart = require("../database/cart");
const cloudinary = require('cloudinary');



const userController = {

    allProducts(req, res){
        Product.find({}, function(err, products){
      if(err){
          res.send(err);
      }else{
          res.render("allproducts", {products: products});
      }
        });
    },

    addProduct(req, res){
     var productId = req.params.id;
     var cart = new Cart (req.session.cart ? req.session.cart : {});

     Product.findById(productId, function(err, product){
      if(err){
        res.redirect("/");
        return;
      }

      cart.add(product, productId);
      req.session.cart = cart;
      req.flash("success_msg", "Added to cart");
      res.render("cart", {products: cart.generateArray});
     });
    },

    displayProduct (req,res){
       if(!req.session.cart){
           res.render("nocart");
       }

       var cart = new Cart(req.session.cart);
       res.render("cart", {products: cart.generateArray()});
    }

    

};



module.exports = userController;