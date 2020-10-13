//jshint esversion:6
const express = require("express");
const userController = require("../controllers/userControllers");
const Product = require("../database/productModel");
const session = require('express-session');
const Cart = require("../database/cart");
const userRouter = express.Router();



// userRouter.get("/singleproduct", userController.getSingleProduct);
userRouter.get("/filahcaps", userController.allProducts);
userRouter.get("/add-to-cart/:id", userController.addProduct); 
userRouter.get("/cart", userController.displayProduct); 



module.exports = userRouter;