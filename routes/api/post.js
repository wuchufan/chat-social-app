const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
  getAllPost,
  createPost
} = require('../../controllers/postController');

router.route('/')
.get(getAllPost)
.post(auth, createPost);




module.exports = router;
