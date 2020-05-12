const express = require('express');
const router = express.Router();
const passport = require('passport');
const LoginController = require('../controller/loginController');


//route to login page
router.get('/login',LoginController.getLogin);
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));


module.exports = router;
