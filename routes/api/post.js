const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
  getAllPosts,
  getOnePost,
  createPost,
  createComment,
  increaseOrDecreaseLikes,
  increaseView
} = require('../../controllers/postController');

router.route('/')
.get(getAllPosts)
.post(auth, createPost);

router.route('/comment')
.post(auth, createComment);

router.route('/visit')
.put(increaseView);

router.route('/like')
.put(auth, increaseOrDecreaseLikes)

router.route('/:id')
.get(getOnePost);




module.exports = router;
