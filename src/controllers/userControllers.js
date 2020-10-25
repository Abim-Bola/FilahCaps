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
      res.redirect("/user/cart");
     });
    },

    displayProduct (req,res){
       if(!req.session.cart){
           res.render("nocart");
       }

       var cart = new Cart(req.session.cart);
       res.render("cart", {products: cart.generateArray(), totalPrice: cart.totalPrice});
    },

    singlecap(req, res){
        productId = req.params.id;

        Product.findById(productId, function(err, products){
            if(err){
                res.send("hello");
            }else{

            res.render("singlecap", {products: products});
            }
        });
    },

    checkout(req, res){
        res.render("checkout");
    }

    

};



module.exports = userController;