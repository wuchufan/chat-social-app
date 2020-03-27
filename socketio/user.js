let users = [];

const addUser = (username,userId)=>{

  users.push({...username,userId});
  console.log(`there are ${users.length} users`);
  console.log(users);
}

const removeUser = (userId) =>{
   users = users.filter(user => user.userId !== userId);
   console.log('User removed');
}

const getCurrentUser = () => users

module.exports =  { addUser, removeUser, getCurrentUser }
