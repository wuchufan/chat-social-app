const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },

  age:{
    type:Number,
  },


  education:{
    school:{
      type:String
    },
    major:{
      type:String
    }
  },

  game:[
    {
      title:{
        type:String
      },
      genre:{
        type:String
      }
    }
  ],

  social:{
    github:{
      type:String
    },
    facebook:{
      type:String
      }
    }

  }

);

module.exports = Profile = mongoose.model('profile',profileSchema);