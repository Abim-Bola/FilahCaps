//jshint esversion:6
require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
var path = require('path');
const flash = require("connect-flash");
const mongoose = require("mongoose");
const session = require("express-session");
const cloudinary = require("cloudinary");
const methodOverride = require("method-override");
const expressLayout = require("express-ejs-layouts");
const adminRouter = require('./src/routes/adminRoutes');
const userRouter = require('./src/routes/userRoutes');


const app = express();


//db config
const db = require('./src/config/key').MongoURI;


//connect to mongoose
 mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("mongo connected"))
.catch(err => console.log(err));

//ejs 
app.use(expressLayout);
app.use(methodOverride('method'));
app.set('views', './src/views');
app.set('view engine', 'ejs');



//body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.static("./src/public"));


//express session
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));

  //flash
app.use(flash());

//global vars for flash
app.use(function(req, res, next){
res.locals.success_msg = req.flash("success_msg");
res.locals.error_msg = req.flash("error_msg");
res.locals.error = req.flash("error");
next();
});


app.get("/", function(req, res){
   res.render("index");
    });


    app.use("/admin", adminRouter);
    app.use("/user", userRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("server started on" + " " + PORT));

