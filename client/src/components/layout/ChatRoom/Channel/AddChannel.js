import React,{Fragment, useState } from 'react';


const AddChannel = ({updateRooms, rooms, socket}) => {

  const [channelName, setChannel] = useState('');


  return (
  <Fragment>
      <input type='text' value={channelName} name='channelName' onChange={e=>{
        setChannel(e.target.value);
      }}/>
      <button onClick={()=>{
        socket.emit('addRoom',{ channelName })
        // updateRooms([...rooms,channelName]);
        setChannel('')
      }}>Add channel</button> 
</Fragment>
  );
}



export default AddChannel;
