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

  const [message, setMessage] = useState('');
  //all the messages that have posted
  const [receiveMsgs, setReceiveMsgs] = useState([]);
  const [rooms, updateRooms] = useState(['main','test']);
  const [room, setRoom] = useState('main');
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


  //Should change it when deploy
  const ENDPOINT = 'http://localhost:5000/';

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


  const sendMessage = (e) =>{
    e.preventDefault();
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

      setMessage('');
    }
  };


  return (

    <Fragment>

        <section className={classes['container']}>
         <nav className={classes['items']+' '+classes['navbar']}>

           <NavBar/>
         </nav>
         <div className={classes['items']+' '+ classes['header']}>
           Welcome to Chat Room
         </div>
         <div className={classes['items']+' '+classes['channel']}>
          <div>{rooms.map((roomElement,i)=>
            <Channel key={i}
            user={user}
            room={roomElement}
            currentRoom={room}
            setRoom={setRoom}
            socket={socket}
            />)}
         </div>
           <AddChannel
             updateRooms={updateRooms}
             rooms={rooms}
             socket={socket}/>
         </div>
         <div className={classes['items']+' '+classes['chat-room']} ref={windowRef}>

           {receiveMsgs.map((msg,i)=>{
            //for testing
      
             return (<ReceiveChat key={i} isFirstForMe={receiveMsgs.length === 1} receiveMsg={msg}/>)})}

         </div>
         <div className={classes['items']+' '+classes['chat-bar']}>
           {/* this part needs to be optimized, every word typed is rerendering the parent element */}
           <ChatBar message={message} setMessage={setMessage} sendMessage={sendMessage} />
         </div>
         <div className={classes['items']+' '+classes['member-bar']}>
           Members:
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
