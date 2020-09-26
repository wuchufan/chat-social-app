const Post = require('../models/Post');

exports.getAllPost = async (req, res) => {


  try {
    let posts = Post.find().populate('user','-password').sort({date:-1});

    queryPosts = await posts;

    res.status(200).json(queryPosts);

  } catch (err) {

    res.status(500).json({msg:'Server error'});
  }
}

exports.createPost = async (req, res) => {
  const {title, content, tag} = req.body;
  const postData = {};

  postData.user = req.user.id;
  if (title) postData.title = title;
  if (content) postData.content = content;
  if (tag) postData.tag = tag.split(',');

  postData.comment = [];
  postData.likes = [];

  try {
    let post = await Post.findOne({title});
    if (post) {
      return res.status(401).json({msg: 'Article had already been written'});
    }
    post = new Post(postData);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({msg:'Server error'});
  }
}
