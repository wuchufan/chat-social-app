const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

const {
  updateUserInfo,
  getAllUsers
} = require('../../controllers/userController');



router.route('/')
.get(getAllUsers)
.put(auth, updateUserInfo); //modify username





module.exports = router;
