const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Profile = require('../models/Profile');


exports.getUserInfo = async (req, res)=>{

  try{
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);

  } catch(err){
    console.log(err);
    res.status(500).json('Server error');
  }
}

exports.registerUser = async (req, res)=>{
  const { email,username,password } = req.body;

  try{
    //check if user already exists
    let user = await User.findOne({email:email});
    if(user) {

      return res.status(401).json({msg:'User email already exists'});
    }


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
    await Profile.create({user:user.id})


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
}


exports.loginUser = async (req, res)=>{
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
}
