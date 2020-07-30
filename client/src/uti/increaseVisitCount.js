import axios from 'axios';

export default async()=>{
  try{
    await axios.put('/api/visit');
  } catch(err){
  }
}
