//jshint esversion:6
require('dotenv').config();
const express = require("express");
const multer = require('multer');
var cloudinary = require('cloudinary');
const methodOverride = require("method-override");
const grid = require("gridfs-stream");
const crypto = require("crypto");
const path = require("path");
const gridFsStorage = require("multer-gridfs-storage");
const Product = require("../database/productModel");



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
      });


 const adminController = {
     
        postProduct(req, res){
            cloudinary.uploader.upload(req.files.image.path, function(result) {

            const {productName, price, description} = req.body;

                const newProduct = new Product({
                    productName,
                    price,
                    date: new Date(),
                    description,
                    image: result.url,
                    image_id: result.public_id
                });
        
        newProduct.save(function (err) {
            if(err){
                res.send(err);
            }
            // Redirect
            res.redirect('/product/uploadproduct');
        });
    });
},

getProductUpload(req, res){
  res.render("uploadproduct");
}

    

 };






 module.exports = adminController;