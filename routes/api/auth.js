const express = require('express');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const router = express.Router();



//@Route GET api/auth
//@Desc get user info according to his/her token
//@Access Public
router.get('/',auth, async (req,res)=>{
  try{
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);

  } catch(err){
    console.log(err);
    res.status(500).json('Server error');
  }
});



//@Route POST api/auth
//@Desc login user
//@Access Public
router.post('/',async (req,res)=>{
  const { email,password } = req.body;

  try{
    //check if user exists
    const user = await User.findOne({email});
    if(!user) return res.status(403).json({msg:'Username or password is incorrect'});

    //check if password matches
    const isMatch = await bcrypt.compare( password , user.password);
    if (!isMatch) return res.status(403).json({msg:'Username or password is incorrect'});

    //return jwt

    const payload = {
      user:{
        id:user.id
      }
    }

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



  }catch(error){
    console.log(error);
    res.json('Server error')
  }
});


module.exports = router;
