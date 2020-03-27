let users = [];

const addUser = (user,userId)=>{
  for (let i = 0; i < users.length; i++){
    // console.log(users[i].username, user);
    if(users[i].username === user.username){
      console.log(true);
      return
    }
  }
  users.push({...user,userId});
  console.log(`there are ${users.length} users`);
  // console.log(users);
}

const removeUser = (userId) =>{
   users = users.filter(user => user.userId !== userId);
   console.log('User removed');
   // console.log(`there are ${users.length} users`);
}

const getCurrentUser = () => {
  // console.log(`there are ${users.length} users`);
  return users
};

module.exports =  { addUser, removeUser, getCurrentUser }
