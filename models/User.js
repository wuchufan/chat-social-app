const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  avatar:{
    type:String,
    default:''
  },
  date:{
    type:Date,
    default:Date.now
  }

});

module.exports = User = mongoose.model('user',userSchema);
