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
      style={(room === currentRoom) ? {
        backgroundColor:'#36393f',
        color:'white',
        borderRadius:'5px'
      } : null} >
      <i class="fas fa-arrow-circle-right"></i>{' '}{room}
    </div>
  );
}



export default Channel;
