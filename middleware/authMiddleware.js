const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

function authMiddleware(req, res, next) {
  
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // console.log(token);
  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET , (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });

}

module.exports = authMiddleware;
