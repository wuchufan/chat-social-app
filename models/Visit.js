const mongoose = require('mongoose');


const visitorSchema = new mongoose.Schema({
  ipAddress:{
    type:String
  },
  timeVisited:{
    type:Date,
    default:Date.now
  }

});

module.exports = Visitor = mongoose.model('Visitor', visitorSchema);
