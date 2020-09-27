const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
  getAllPosts,
  getOnePost,
  createPost
} = require('../../controllers/postController');

router.route('/')
.get(getAllPosts)
.post(auth, createPost);

router.route('/:id')
.get(getOnePost);




module.exports = router;
