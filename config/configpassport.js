const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');


passport.use(
    new GoogleStrategy({
        callbackURL:'go',
        clientID:'463139819295-2ihjcc0mqfdolr1mtdu9loseg77kjjs6.apps.googleusercontent.com',
        clientSecret:'CvhJm7VmZPjvPK6PaQXe-nI-'
    },()=>{

    })
)

