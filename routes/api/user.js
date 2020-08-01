const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const router = express.Router();

const {
  updateUserInfo
} = require('../../controllers/userController');


router.route('/')
.put(auth, updateUserInfo);



module.exports = router;
