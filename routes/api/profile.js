const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validate } = require('../../middleware/profile');

const {
  getUserProfile,
  createOrUpdateUserProfile,
  getTargetUserProfile
} = require('../../controllers/profileController')


router.route('/me')
.get(auth,getUserProfile);  //get current user profile (private route)


router.route('/')
.post(auth,createOrUpdateUserProfile) //create or update profile (private route)
.get(validate,getTargetUserProfile); //get profile of other user (public route)

module.exports = router;
