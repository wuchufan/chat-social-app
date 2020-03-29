import React,{ Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Landing.module.scss';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import PropTypes from 'prop-types';

const Landing = ({ auth:{ isAuthenticated,user }}) =>{
  const [hasAccount, setAccount] = useState(false)


  if(isAuthenticated && user) return <Redirect to='/chat-room'/>


  return (
    <Fragment>
      <NavBar/>

    <section className={classes['landing']}>
      <div className={classes['container']}>
        <div className={classes['title']}>
          <p className={classes['title--big']}>Welcome to Group!</p>
          <p className={classes['title--small']}>Group is a online social platform. You can meet and talk to different people, in real-time.</p>
        </div>
        <div className={classes['form']}>

        {hasAccount ? <SignIn setAccount={setAccount}/> : <SignUp setAccount={setAccount}/>}
        </div>
      </div>
    </section>
  </Fragment>
  )
}

Landing.propTypes={
  auth:PropTypes.object.isRequired
}


const mapStateToProps = state =>({
  auth:state.auth
})

export default connect(mapStateToProps)(Landing);
