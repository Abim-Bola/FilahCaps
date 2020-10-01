//jshint esversion:6
const express = require("express");
const userController = require("../controllers/userControllers");
const userRouter = express.Router();



// userRouter.get("/singleproduct", userController.getSingleProduct);
userRouter.get("/allfilahcaps", userController.allProducts);



module.exports = userRouter;