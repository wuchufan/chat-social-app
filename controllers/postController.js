const Post = require('../models/Post');



exports.getAllPosts = async (req, res) => {
  try {
    let posts = Post.find().populate('user','-password').sort({date:-1});

    queryPosts = await posts;

    res.status(200).json(queryPosts);

  } catch (err) {
    console.log(err);
    res.status(500).json({msg:'Server error'});
  }
}

exports.getOnePost = async (req,res)=>{
  try{
    let post = await Post.findById(req.params.id).populate('user','-password').populate('comment.user','-password');

    res.status(200).json(post);

  } catch(err){
    console.log(err);
    res.status(500).json({msg:'Server error'})
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
    console.log(err);
    res.status(500).json({msg:'Server error'});
  }
}

exports.createComment = async (req,res) =>{

  const { comment, postId } = req.body;
  const commentData = {};

  commentData.user = req.user.id;
  if(comment) commentData.text = comment;

  try{

    let post = await Post.findById(postId);
    post.comment.push(commentData);
    await post.save();

    res.status(200).json(post);
  } catch(err){
    
    console.log(err);
    res.status(500).json({msg:'Server error'});
  }


}
