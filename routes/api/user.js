const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const router = express.Router();


//@Route PUT api/user
//@Desc edit user info
//@Access Private

router.put('/', auth, async(req,res)=>{
  const {
    newUserName
  } = req.body;
  try{
    console.log(req.user);
    const user = await User.findOne({_id:req.user.id});
    console.log(user,newUserName);
    if(!user) return res.status(400).json({msg:'No user found'});
    const newUserNameProfile = await User.findOneAndUpdate(
      {_id:req.user.id},
      {$set:{username:newUserName}},
      {new:true}
    );
    console.log(newUserNameProfile);
    res.json(newUserNameProfile);
  } catch(error){
    console.log(error);
    res.status(500).json('Server error');
  }
})


module.exports = router;
