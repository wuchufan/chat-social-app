const Visitor = require('../models/Visit');
const visitAPIFeatures = require('../utils/visitAPIFeatures');


exports.getVisitStats = async (req, res)=>{
  let pipeline = [{
          $group:{
            _id:'$ipAddress',
            visitNum:{$sum: 1},
            firstTimeVisit:{$min: '$timeVisited'},
            lastTimeVisit:{$max:'$timeVisited'}
          }
        },
        {
          $sort:{
            visitNum:-1,
            lastTimeVisit:-1
          }
        }];
  if(req.query.total) pipeline.push({$count:'number of differnet IP'});
  try{
    const stats = await Visitor.aggregate(pipeline);

    res.json({stats})

  }catch(err){
    console.log(err);
    res.status(500).json({msg:err})
  }
}


exports.getVisit = async (req,res)=>{
  try{

    const features = new visitAPIFeatures(Visitor.find(),req.query)
    .filter();


    visits = await features.query;


    res.json({
      totalVisited:visits.length,
      data:visits
    })

  }catch(err){
    console.log(err);
    res.status(500).json({msg:err})
  }
}


//record incoming visitor's ip and the time they visited
exports.recordVisit = async (req,res) =>{
  if (process.env.NODE_ENV === 'production') {
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const visitor = await Visitor.create({
      ipAddress:ip

    });
    res.json({visitor});
  } catch (err) {
    res.status(500).json({msg: err});
  }
  }
}
