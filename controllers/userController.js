const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.getAllUsers = async (req,res)=>{
  try{
  

  } catch(err){

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
