const express = require('express');
const router = express.Router();

//@Route POST api/profile
router.get('/',(req,res)=>{
  res.send('Hello from profile');
})


module.exports = router;
