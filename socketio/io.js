const { addUser, removeUser, getCurrentUser, leaveRoom } = require('./user');

module.exports = function (io){
  io.on('connection',function(socket){

    console.log(`======= user ${socket.id} has connected ===== `);

    console.log('[Connection] connection');


    // handle user joining room
    socket.on('join',function(payload){

      socket.join(payload.room);

      console.log(`[Join] [${payload.user.username}] joined [${payload.room}].`);
      // console.log(`[Join] payload received as:`, payload);
      addUser(payload.user,payload.room,socket.id);

      const currentUser = getCurrentUser(payload.room);

      // console.log(currentUser);
      io.to(payload.room).emit('users',currentUser);
      console.log(`======[Join] current User sent to front end======`);

    });



    //handle incoming messages
    socket.on('message',function(payload){

      // console.log(`[Message] message recieved from [${payload.room}] as: [${payload.msg}].`);

      io.to(payload.room).emit('message',payload);

      console.log(`==== [Message] message sent to front end ====`);
    });

    //handle leaving room
    socket.on('leave-room',function(payload){

      socket.leave(payload.room);

      console.log(`=====[Leave-room] [${payload.user.username}] left room [${payload.room}]=====`);

      leaveRoom(socket.id);

      io.to(payload.room).emit('users',getCurrentUser(payload.room));

      console.log(`=====user ${socket.id} has disconnected from [${payload.room}]=====`);
    });

    //handle adding channel
    socket.on('addRoom',function(payload){
      io.emit('addRoom',payload.channelName);
    });


    //disconnection
    socket.on('disconnect',function(){

      const user = removeUser(socket.id);
      if(user){
                io.to(user.room).emit('users',getCurrentUser(user.room));
      } else{
        console.log('ERROR: No user to remove');
      }

    })

  })
}
