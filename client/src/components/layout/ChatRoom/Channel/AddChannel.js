import React,{Fragment, useState } from 'react';
import classes from './AddChannel.module.scss';


const AddChannel = ({updateRooms, rooms, socket}) => {

  const [channelName, setChannel] = useState('');


  return (
  <Fragment>
    <div className={classes['container']}>
      <input autoComplete='off' className={classes['input']} type='text' value={channelName} name='channelName' onChange={e=>{
        setChannel(e.target.value);
      }}/>
      <span role='button' className={classes['button']}>

        <i className={`fas fa-plus ${classes['icon']}`} onClick={()=>{
        if(channelName) socket.emit('addRoom',{ channelName });
        setChannel('');
      }}></i>
      </span>
      </div>
</Fragment>
  );
}



export default AddChannel;
