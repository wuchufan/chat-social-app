module.exports = (req, res, next) =>{

  if(req.query.password !== process.env.VISIT_API_PASSWORD){
    res.status(401).json({msg:'Access denied'});
  } else{
    next();
  }
}
