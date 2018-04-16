const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/User');
const path = require('path');
const debug = require('debug')(
  'server:' + path.basename(__filename).split('.')[0]
);

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user: req.user });
  debug();
};

// Go to registration page
userController.register = function(req, res) {
  res.render('register');
};

// Post registration
userController.doRegister = function(req, res) {
  User.register(
    new User({ username: req.body.username, name: req.body.name }),
    req.body.password,
    function(err, user) {
      if (err) {
        return res.render('register', { user: user });
      }

      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function() {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;
