const mongoose = require('mongoose');


const visitorSchema = new mongoose.Schema({
  function:{
    type:String,
    default:'User visit number recording'
  },
  visited:{
    type:Number,
    default:0
  }
});

module.exports = Visitor = mongoose.model('Visitor', visitorSchema);
