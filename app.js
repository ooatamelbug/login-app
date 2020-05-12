/*
********************
//requirements of libirary that we need mongoose,express, body-parse,cors,socketio,multer,express-validator
********************
*/
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
/*
********************
//requirements of file that we need config
********************
*/

const {DB_URI} = require('./config/db');


/*
********************
//requirements of file that we need router
********************
*/

const routerLogin = require('./routes/login');
const passportSetup = require('./config/configpassport');

/*
********************
//here i fire express nodejs libirary in app variable
********************
*/

const app = express();


/*
********************
//here we fire engine template
********************
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));


/*
********************
//here we handel router in project
********************
*/
app.use('/',routerLogin);



/*
********************
//body parser fire
********************
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}));

/*
********************
//here we make connection with Mongoose database
//and listen to server
********************
*/

mongoose.connect(DB_URI,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
  app.listen( process.env.PORT || 3000,()=>{
    console.log('connect');
   })
}).catch(err=>{
  console.log(err);
})
