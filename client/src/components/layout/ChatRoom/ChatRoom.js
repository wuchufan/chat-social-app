import React,{ Fragment,useEffect, useState,useRef } from 'react';
import { connect } from 'react-redux';
import ChatBar from './ChatBar/ChatBar';
import ReceiveChat from './ReceiveChat/ReceiveChat';
import classes from './ChatRoom.module.scss';
import User from './User/User';
import io from "socket.io-client";


let socket;

const ChatRoom = ({
  auth:{user}
}) => {


  const [message, setMessage] = useState('');
  const [receiveMsgs, setReceiveMsgs] = useState([]);
  const [users, updateUsers] = useState([]);

  //scroll to bottom functionality
  const windowRef = useRef(null);
  const node = windowRef.current;
  useEffect(()=>{
    if(node){
        node.scrollTop = node.scrollHeight;
    }

  },[receiveMsgs])


  //Should change it when deploy
  const ENDPOINT = 'http://localhost:5000/';

  //initiate socket connection
  useEffect(()=>{
    console.log('[Frontend] useEffect');
    socket = io(ENDPOINT);
    if(user)socket.emit('join',user);


    return () =>{
      socket.disconnect();
      socket.off();
    }
  },[ENDPOINT]);

  useEffect(()=>{

    //update message rendering
    socket.on('message',(msg)=>{
      setReceiveMsgs(receiveMsgs=> [...receiveMsgs, msg])
    });


    //get current users
    socket.on('users',(users)=>{
      updateUsers(users);
    });


  },[]);


  const sendMessage = (e) =>{
    e.preventDefault();
    if(message){
      socket.emit('message',message);

      setMessage('');
    }
  };


  return (

    <Fragment>
        <section className={classes['container']}>
         <div className={classes['items']+' '+classes['navbar']}>
           navbar
         </div>
         <div className={classes['items']+' '+ classes['header']}>
           header
         </div>
         <div className={classes['items']+' '+classes['channel']}>
           channel
         </div>
         <div className={classes['items']+' '+classes['chat-room']} ref={windowRef}>
           {receiveMsgs.map((msg,i)=><ReceiveChat user={user} key={i} receiveMsg={msg}/>)}
         </div>
         <div className={classes['items']+' '+classes['chat-bar']}>
           <ChatBar message={message} setMessage={setMessage} sendMessage={sendMessage} />
         </div>
         <div className={classes['items']+' '+classes['member-bar']}>
           Members
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
