exports.validate = (req, res,next) => {
  if (Object.keys(req.query).length === 0) {
    return res.status(400).json({msg: 'no target is found'});
  }else if (Object.keys(req.query).length > 1) {
    return res.status(400).json({msg: 'only one target can be passed'});
  }
  req.target = req.query.target;

  next();

}
