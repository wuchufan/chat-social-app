const { addUser, removeUser, getCurrentUser } = require('./user');

module.exports = function (io){
  io.on('connection',function(socket){
    console.log(`user ${socket.id} has connected`);
    //handle user joining room
    socket.on('join',function(username){
      addUser(username,socket.id);
      const currentUser = getCurrentUser();
      io.emit('users',currentUser);
    });



    //handle incoming messages
    socket.on('message',function(msg){
      io.emit('message',msg);
    });



    //leave room
    socket.on('disconnect',function(){
      removeUser(socket.id);
      io.emit('users',getCurrentUser())
      console.log(`user ${socket.id} has disconnected`);
    })
  })
}
