const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Profile = require('../models/Profile');


exports.getAllUsers = async (req,res)=>{
  try{
    const profiles = await Profile.find().populate('user').select('-password');
    // const users = await User.find().select(['-__v','-password']).lean();
    // console.log('profiles are', profiles);
    //
    // profiles.forEach((profile)=>{
    //
    //   users.forEach((user)=>{
    //     if(JSON.stringify(user._id) === JSON.stringify(profile.user._id)){
    //       user.profile = {...profile};
    //       delete user.profile.user;
    //
    //     }
    //   });
    // });

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
    // console.log(error);
    res.status(500).json('Server error');
  }
}
