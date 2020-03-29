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


let socket;

// if(localStorage.token){
//   setAuthState(localStorage.token);
// }


const ChatRoom = ({
  auth:{user}

}) => {


  const [message, setMessage] = useState('');
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

  },[receiveMsgs])


  //Should change it when deploy
  const ENDPOINT = 'http://localhost:5000/';

  //initiate socket connection
  useEffect(()=>{

    socket = io(ENDPOINT);
    console.log(user);
    if(user)socket.emit('join',{user, room});


    return () =>{
      socket.disconnect();
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


    //adding room
    socket.on('addRoom',(roomName)=>{
      updateRooms(rooms => [...rooms, roomName]);
    });

  },[]);


  const sendMessage = (e) =>{
    e.preventDefault();
    if(message){
      socket.emit('message',{msg:message,room});

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
           {receiveMsgs.map((msg,i)=><ReceiveChat user={user} key={i} receiveMsg={msg}/>)}

         </div>
         <div className={classes['items']+' '+classes['chat-bar']}>
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
