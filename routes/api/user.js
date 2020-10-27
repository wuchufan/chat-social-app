const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

const {
  updateUserInfo,
  getAllUsers,
  deleteAccount,
  getUserAvatar,
  updateUserAvatar
} = require('../../controllers/userController');

const {
  upload
} = require('../../config/multer');


const {
  uploadAvatar
} = require('../../middleware/user');


router.route('/')
.get(getAllUsers)            //get all users
.put(auth, updateUserInfo); //modify user's username

router.route('/avatar')
.put(auth,upload, uploadAvatar, updateUserAvatar)


router.route('/delete-account')
.put(auth, deleteAccount);




module.exports = router;
