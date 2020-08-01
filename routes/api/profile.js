const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// const Profile = require('../../models/Profile');

const {
  getUserProfile,
  createOrUpdateUserProfile
} = require('../../controllers/profileController')


router.route('/me')
.get(auth,getUserProfile);  //get current user profile


router.route('/')
.post(auth,createOrUpdateUserProfile); //create profile


module.exports = router;
