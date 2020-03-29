import React from 'react';
import classes from './Channel.module.scss';


const Channel = ({
  room,
  currentRoom,
  setRoom,
  socket,
  user
}) => {
  return (
    <div
      onClick={()=>{
        socket.emit('leave-room',{user,room:currentRoom})
        socket.emit('join',{user,room});
        setRoom(room);
      }}
      className={classes['channel']}
      style={(room === currentRoom) ? {backgroundColor:'yellowgreen'} : null} >
      {room}
    </div>
  );
}



export default Channel;
