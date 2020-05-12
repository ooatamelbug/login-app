const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//fire function new googleStrategy and get token

passport.use(
    new GoogleStrategy({
        callbackURL:'go',
        clientID:'463139819295-2ihjcc0mqfdolr1mtdu9loseg77kjjs6.apps.googleusercontent.com',
        clientSecret:'CvhJm7VmZPjvPK6PaQXe-nI-'
    },(accessToken,refreshToken,profile,done)=>{
        let lengthimages = profile.photos.length;
        User.findOne({googleid:profile.id})
        .then(userData=>{
            if(!userData){
                new User({
                    name : profile.displayName,
                    googleid: profile.id,
                    image: profile.photos[lengthimages-1].value
                }).save().then(userDataSaved=>{
                    const token = jwt.sign({
                        nameName:userDataSaved.name,
                        userId: userDataSaved._id,
                        googleID: userDataSaved.googleid
                    },'secretLoginUserInNewProfile',
                    {expiresIn:'1h'})
                    
                    console.log(token);
                    return { token:token};    
                })
            }else{
                const token = jwt.sign({
                    nameName:userData.name,
                    userId: userData._id,
                    googleID: userData.googleid
                },'secretLoginUserInNewProfile',
                {expiresIn:'1h'})

                console.log(token);
                return { token:token};    
            }
        })
        
    })
)

