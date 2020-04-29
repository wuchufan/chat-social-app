const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const router = express.Router();

//@Route POST api/user
//@Desc Register user
//@Access Public


router.post('/', async (req,res)=>{
  const { email,username,password } = req.body;

  try{
    //check if user already exists
    let user = await User.findOne({email:email});
    if(user) res.json({msg:'user already exists'});


    //register user
    user = new User({
      email,
      username,
      password
    });

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password,salt);

    await user.save();

    const payload = {
      user:{
            id:user.id
          }
        }
    //return jsonwebtoken
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {expiresIn:36000},
      (err,token)=>{
        if(err) throw err;
        else{
          res.json({token});
        }
      }
    )

  } catch(error){
    console.log(error);
    res.status(500).send('Server error')
  }
});

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
