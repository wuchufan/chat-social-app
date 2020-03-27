const jwt = require('jsonwebtoken')

module.exports = async function(req,res,next){
  const token = req.header('x-auth-token');
  if(!token) return res.status(403).json({msg:'no token, authentication denied'})

  try{
      const decode = await jwt.verify(token,process.env.JWT_SECRET);
      req.user = decode.user;
      next();
  } catch(err){
    console.log(err);
    res.status(401).json({msg:'authentication error'})
  }

}
