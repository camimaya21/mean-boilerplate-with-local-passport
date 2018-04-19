const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const authRoutes = express.Router();
const debug = require('debug')(
  'server:' + path.basename(__filename).split('.')[0]
);

/* GET home page. */
authRoutes.post('/signup', (req, res) => {
  const { username, name, email, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Provide username and password' });
  }

  debug('Find user in DB');

  User.findOne({ username }, '_id')
    .exec()
    .then(user => {
      if (user) {
        return res.status(400).json({ message: 'The username already exists' });
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const theUser = new User({
        username,
        name,
        email,
        password: hashPass
      });
      return theUser
        .save()
        .then(newUser => {
          req.login(newUser, err => {
            if (err) {
              return res.status(500).json({ message: 'Something went wrong' });
            }
            res.status(200).json(req.user);
          });
        })
        .catch(e => {
          debug(e);
          res.status(500).json({ message: 'Something went wrong' });
        });
    });
});

authRoutes.post('/login', (req, res) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong' });
    }

    if (!theUser) {
      return res.status(401).json(failureDetails);
    }

    req.login(theUser, err => {
      if (err) {
        return res.status(500).json({ message: 'Something went wrong' });
      }

      res.status(200).json(req.user);
    });
  })(req, res);
});

authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
  debug('logout');
});

authRoutes.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  res.status(403).json({ message: 'Unauthorized, you need to login or signup' });
  debug('loggedin');
});

module.exports = authRoutes;
