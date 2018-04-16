/* const LocalStrategy = require('passport-local').Strategy; */
const passport = require('passport');
const User = require('../models/User');

/* passport.serializeUser((loggedInUser, next) => {
  next(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, next) => {
  User.findById(userIdFromSession)
    .then(user => next(null, user))
    .catch(e => next(e));
});
 */

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());