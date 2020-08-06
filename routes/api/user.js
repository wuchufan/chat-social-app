const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

const {
  updateUserInfo,
  getAllUsers,
  deleteAccount
} = require('../../controllers/userController');



router.route('/')
.get(getAllUsers)            //get all users
.put(auth, updateUserInfo); //modify user's username

router.route('/delete-account')
.put(auth, deleteAccount);




module.exports = router;
