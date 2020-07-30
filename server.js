require('dotenv').config({path:'config/.env'})
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const connectIo = require('./socketio/io');
const path = require('path');

//connect to MongoDB

connectDB();

//establish socketio connection
connectIo(io);

//middleware to parse body
app.use(express.json({extended: false }));

app.use('/api/visit',require('./routes/api/visit'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/user',require('./routes/api/user'));



if (process.env.NODE_ENV === 'production'){
app.use(express.static('client/build'));
app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'));

  });
}


http.listen(port,(res,req)=>{
  console.log(`Server is up at ${port}`);
})
