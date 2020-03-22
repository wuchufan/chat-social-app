const mongoose = require('mongoose');


const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_CONFIG,{ useNewUrlParser: true,useUnifiedTopology: true ,useCreateIndex:true});
    await mongoose.set('useFindAndModify', false);

    console.log('MongoDB connected');

  }catch(err){
    console.log(err.message);
    process.exit(1);
  }
}


module.exports = connectDB;
