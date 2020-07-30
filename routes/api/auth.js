const express = require('express');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const router = express.Router();
const {
  getUserInfo,
  registerUser,
  loginUser
} = require('../../controllers/authController');

router.route('/')       // Route: api/auth
.get(auth,getUserInfo)  //get user info according to his/her token
.post(registerUser)     //Register user

router.route('/login')  // Route: api/login
.post(loginUser);



module.exports = router;
