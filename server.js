require('dotenv').config({path:'config/.env'})
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;

//connect to MongoDB

connectDB();

//middleware to parse body
app.use(express.json({extended: false }));


app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/user',require('./routes/api/user'));






app.listen(port,(res,req)=>{
  console.log(`Server is up at ${port}`);
})
