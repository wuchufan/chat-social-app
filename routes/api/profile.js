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
.get(auth,getUserProfile);  //get current user profile


router.route('/')
.post(auth,createOrUpdateUserProfile) //create profile
.get(validate,getTargetUserProfile);

module.exports = router;
