const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// POST /users/signup - User sign-up
router.post('/signup', userController.signup);

// // POST /users/login - User login
router.post('/login', userController.login);
 


module.exports = router;
