const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
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

module.exports = router;
