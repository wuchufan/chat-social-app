const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Profile = require('../models/Profile');


exports.getAllUsers = async (req,res)=>{
  try{
    const profiles = await Profile.find().populate('user','-password');

    res.json({msg:profiles});

  } catch(err){
    console.log(err);
    res.status(500).json({msg:err})
  }
}




exports.updateUserInfo = async (req, res)=>{
  const {
    newUserName
  } = req.body;
  try{
    const user = await User.findOne({_id:req.user.id});
    if(!user) return res.status(400).json({msg:'No user found'});
    const newUserNameProfile = await User.findOneAndUpdate(
      {_id:req.user.id},
      {$set:{username:newUserName}},
      {new:true}
    );

    res.json(newUserNameProfile);
  } catch(error){

    res.status(500).json('Server error');
  }
}



exports.updateUserAvatar = async (req, res)=>{
  try{
    const user = await User.findOne({_id:req.user.id});
    if(!user) return res.status(400).json({msg:'No user found'});

    const newUserAvatar = await User.findOndAndUpdate(
      {_id:req.user.id},
      {$set:{avatar:req.avatar}}
    )

  res.json({
    msg:'update user avatar info to database',
    avatar:req.avatar
  })
  } catch(err){
    console.log(err);
  res.status(500).json('Server error')
  }
}

exports.deleteAccount = async (req,res)=>{
  try{
    const user = await User.findOneAndDelete({_id:req.user.id});
    const profile = await Profile.findOneAndDelete({user:req.user.id});
    res.json({msg:{user,profile}});

  } catch(error){
    res.status(500).json('Server error')
  }
}
