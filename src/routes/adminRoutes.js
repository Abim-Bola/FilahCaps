//jshint esversion:6
const express = require("express");
const adminController = require("../controllers/adminControllers");
const adminRouter = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


adminRouter.get("/uploadproduct", adminController.getProductUpload);
adminRouter.post("/upload", multipartMiddleware , adminController.postProduct);



module.exports = adminRouter;