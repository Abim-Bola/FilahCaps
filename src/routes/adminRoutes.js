//jshint esversion:6
const express = require("express");
const adminController = require("../controllers/adminControllers");
const adminRouter = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();



adminRouter.post("/upload", multipartMiddleware , adminController.postProduct);
adminRouter.get("/uploadproduct", adminController.getProductUpload);


module.exports = adminRouter;