import React,{ useEffect } from 'react';
import cls from './Members.module.scss';
import { getAllUsers } from '../../../../actions/user';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../UI/Spinner/Spinner';
import Member from './Member/Member';



const Members = ({

  users,
  getAllUsers
}) => {

  useEffect(()=>{
  
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const spinnerStyle = {
    marginTop:'10rem'
  }

  return (
    <>
      {users.loading ? <Spinner style={spinnerStyle}/> :
       <section className={cls['container']}>
         {users.profiles.map((profile,i)=>{

           return <Member key={i}  profile={profile}/>
         })}

       </section>}
    </>
  );
}




Members.propTypes = {
  getAllUsers: PropTypes.func.isRequired
}


const mapStateToProps = state =>({
  users:state.users
})

export default connect(mapStateToProps, { getAllUsers })(Members);
