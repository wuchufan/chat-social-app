let users = [];

//add user to the list or join room
const addUser = (user, room ,userId)=>{
  for (let i = 0; i < users.length; i++){
    if(users[i].username === user.username && users[i].room === room){
    console.log('[addUser] same user encountered, end [addUser]');
    return
    }
    if(users[i].userId === userId){
      users[i].room = room;
      console.log(`[addUser] user room added`);
      return
    }
  }
  users.push({...user,room,userId});
  console.log(`[addUser] User added, ${users.length} users.`);
}

//remove user from list
const removeUser = (userId) =>{
    const removedUser = users.find(user => user.userId === userId);
   users = users.filter(user => user.userId !== userId);
   console.log(`[removeUser] User removed, currently have ${users.length}.`);
   return removedUser

}

//change users room in list
const leaveRoom = (userId)=>{
  const foundUser = users.find((user)=>user.userId === userId);
  if(foundUser) foundUser.room = null;
  console.log(`[leaveRoom] room removed`);
}

//update user info in that room
const getCurrentUser = (room) => {
  room = room || 'main';
  const roomUser = users.filter(user => user.room === room);
  // console.log(users);
  console.log(`[getCurrentUser] got room user ${roomUser.length}.`);
  return roomUser;
};

module.exports =  { addUser, removeUser, getCurrentUser, leaveRoom }
