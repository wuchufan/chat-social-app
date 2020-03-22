const express = require('express');
const User = require('../../models/User');
const router = express.Router();


//@Route POST api/auth
//@Desc login user
//@Access Public

router.post('/',async (req,res)=>{
  const { email,password } = req.body;

  try{
    const user = await User.findOne({email:email});
    if(!user) return res.status(403).json({msg:'username or password error'});

    res.json({msg:'Logged in'});

  }catch(error){
    console.log(error);
    res.json('Server error')
  }
});


module.exports = router;
