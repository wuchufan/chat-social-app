const Visitor = require('../models/Visit');
const visitAPIFeatures = require('../utils/visitAPIFeatures');


exports.getVisitStats = async (req, res)=>{
  try{
    const stats = await Visitor.aggregate([
      {
        $group:{
          _id:'$ipAddress',
          visitNum:{$sum: 1},
          firstTimeVisit:{$min: '$timeVisited'},
          lastTimeVisit:{$max:'$timeVisited'}
        }
      }
    ]);

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
  // if (process.env.NODE_ENV === 'production') {
  try {
    const ip = req.ip;

    const visitor = await Visitor.create({
      ipAddress:ip

    });
    res.json({visitor});
  } catch (err) {
    res.status(500).json({msg: err});
  }
  // }
}
