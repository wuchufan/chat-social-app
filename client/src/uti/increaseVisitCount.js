import axios from 'axios';

export default async()=>{
  try{
    await axios.post('/api/visit');
  } catch(err){
  }
}
