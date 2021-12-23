var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const adminService = require('../components/auth/adminService');

passport.use(new LocalStrategy(

  async function(username, password, done) {
    const user = await adminService.findByUsername(username);
    if(!user)  return done(null, false, {message: 'Incorrect username'});
    const isValid = await adminService.validPassword(password, user);
    if(!isValid)   return done(null,false, {message: 'Incorect password'});
    return done(null, user);
  }
));

passport.serializeUser(function(user, done) {
    user._id = user._id.toString();
    done(null, {_id:user._id, username: user.username, email: user.email});
  });
  
  passport.deserializeUser(async function(user, done) {
      done(null, user);
  });


module.exports = passport;