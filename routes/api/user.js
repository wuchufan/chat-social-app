const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

const {
  updateUserInfo,
  getAllUsers
} = require('../../controllers/userController');



router.route('/')
.get(getAllUsers)            //get all users
.put(auth, updateUserInfo); //modify user's username





module.exports = router;
