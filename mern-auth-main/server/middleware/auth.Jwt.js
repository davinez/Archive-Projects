/*
Middleware to process Authentication & Authorization
-check if token is provided, legal or not.
We get token from x-access-token of HTTP headers, then use jsonwebtoken's verify() function
- check if roles of the user contains required role or not
*/

const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const User = require('../models/user.model');
// const Role = require('../models/role.model');

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    /*
    Add new property to 'request' that contains the token 'id' property,
    created at the moment of the signin jwt.sign({ id: user._id }...
    */
    req.userId = decoded.id;

    next();
  });
};

const isAdmin = (req, res, next) => {
  User.findById(req.userId)
    .populate('roles')
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i].name === 'admin') {
          next();
          return;
        }
      }

      // else 'not admin role'
      res.status(403).send({ message: 'Require Admin Role!' });
    });
};

const isModerator = (req, res, next) => {
  User.findById(req.userId)
    .populate('roles')
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i].name === 'moderator') {
          next();
          return;
        }
      }

      // else 'not admin role'
      res.status(403).send({ message: 'Require Moderator Role!' });
    });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
};
module.exports = authJwt;
