import React,{ useEffect } from 'react';
import cls from './Members.module.scss';
import { getAllUsers } from '../../../../actions/user';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../UI/Spinner/Spinner';
import Member from './Member/Member';


const Members = ({
  user,
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
      {user.loading ? <Spinner style={spinnerStyle}/> :
       <section className={cls['container']}>
         {user.profiles.map((profile)=>{

           return <Member profile={profile}/>
         })}

       </section>}
    </>
  );
}




Members.propTypes = {
  user: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired
}


const mapStateToProps = state =>({
  user:state.user
})

export default connect(mapStateToProps, { getAllUsers })(Members);
