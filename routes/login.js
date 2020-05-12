const express = require('express');
const router = express.Router();
const passport = require('passport');
const LoginController = require('../controller/loginController');

//route to login page
router.get('/login',LoginController.getLogin);

//route to login by google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

//route to index page
router.get('/go',LoginController.getIndexPage);

/**************/
module.exports = router;
