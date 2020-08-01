import React,{ Fragment,useEffect, useState,useRef } from 'react';
import { connect } from 'react-redux';
import ChatBar from './ChatBar/ChatBar';
import ReceiveChat from './ReceiveChat/ReceiveChat';
import AddChannel from './Channel/AddChannel';
import classes from './ChatRoom.module.scss';
import NavBar from './NavBar/NavBar';
import User from './User/User';
import Channel from './Channel/Channel';
import io from "socket.io-client";
import getTimeDifference from '../../../uti/getTimeDifference';

let socket;

const ChatRoom = ({
  auth:{user}

}) => {

  // const [message, setMessage] = useState('');
  //all the messages that have posted
  const [receiveMsgs, setReceiveMsgs] = useState([]);
  const [rooms, updateRooms] = useState(['Main','Meeting room']);
  const [room, setRoom] = useState('Main');
  const [users, updateUsers] = useState([]);

  //scroll to bottom functionality
  const windowRef = useRef(null);
  const node = windowRef.current;
  useEffect(()=>{
    if(node){
        node.scrollTop = node.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[receiveMsgs])


  let ENDPOINT;
  if(process.env.NODE_ENV === 'production'){
     ENDPOINT = 'https://mengnan-group.herokuapp.com/';
  }else{
    ENDPOINT = 'http://localhost:5000/';
  }



  //initiate socket connection
  useEffect(()=>{

    socket = io(ENDPOINT);
    if(user)socket.emit('join',{user, room});


    return () =>{
      socket.disconnect();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ENDPOINT]);

  useEffect(()=>{

    //update message rendering
    socket.on('message',(msg)=>{

      setReceiveMsgs(receiveMsgs=> {
        if(receiveMsgs.length){
          msg.isFirst = false
        }
        return[...receiveMsgs, msg]
      })
    });

    //get current users
    socket.on('users',(users)=>{
      updateUsers(users);
    });


    //adding room
    socket.on('addRoom',(roomName)=>{
      updateRooms(rooms => [...rooms, roomName]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const sendMessage = (message) =>{

    let showFull = true;
    let isFirst = true;
    const timeInfo = new Date();
    if(receiveMsgs.length){
      const lastMessage = receiveMsgs.slice(-1)[0];
      const timeDifference = getTimeDifference(new Date(lastMessage.timeInfo),timeInfo);
      showFull = !(user._id === lastMessage.user._id && timeDifference < 600000); //600000 = 10 minutes
      isFirst= false;

    }

    if(message){

      socket.emit('message',{
        msg:message,
        room,
        timeInfo,
        user,
        showFull,
        isFirst
      });

    }
  };



  return (

    <Fragment>

        <section className={classes['container']}>
         <nav className={classes['items']+' '+classes['navbar']}>
           <NavBar/>

         </nav>

         <div className={classes['items']+' '+ classes['header']}>
           #{' '}{room}
         </div>

         <div className={classes['items']+' '+classes['channel']}>

           <div className={ classes['channel__title']}>

            <i className="fas fa-comments"></i>
            <span style={{marginLeft:'1rem'}}>Chat Room</span>

           </div>
          <div className={ classes['channel__name']}>{rooms.map((roomElement,i)=>
            <Channel key={i}
            user={user}
            room={roomElement}
            currentRoom={room}
            setRoom={setRoom}
            socket={socket}
            />)}
         </div>
         <div className={classes['channel__add-channel']}>

           <AddChannel
             updateRooms={updateRooms}
             rooms={rooms}
             socket={socket}/>
           </div>

         </div>

         <div className={classes['items']+' '+classes['chat-room']} ref={windowRef}>

           {receiveMsgs.map((msg,i)=>{
            //for testing
             return (<ReceiveChat key={i} isFirstForMe={receiveMsgs.length === 1} receiveMsg={msg}/>)})}

         </div>

         <div className={classes['items']+' '+classes['chat-bar']}>
           <ChatBar sendMessage={sendMessage} />
         </div>

         <div className={classes['items']+' '+classes['member-bar']}>

           <span style={{
             display:'inline-block',
             color:'#8e9297',
             fontSize:'1.2rem',
             lineHeight:1.6,
             textTransform:'uppercase',
             marginBottom:'2rem'
           }}><i className="fas fa-user-friends"></i>{' '}Online - {users.length}
         </span>
           {users.map((user)=><User key={user._id} user={user} />)}

         </div>
       </section>
     </Fragment>
  );
}

const mapStateToProps = state =>({
  auth:state.auth
})

export default connect(mapStateToProps)(ChatRoom);
