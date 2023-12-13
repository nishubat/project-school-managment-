import React from 'react'
import './loginsignup.css'
import user_icon from './person.png';
import { Link } from 'react-router-dom';
import password_icon from './password.png'
function signuplogin(){
  return (
    <><div className='container'>
      <div className="header">
        <div className="text">LOG IN</div>
    <div className='inputs'></div>
    <div className='input'>
      <img src={user_icon} alt="" />
      <input type='text' placeholder='USERNAME'></input></div>
    <div className='input'>
      <img src={password_icon} alt="" />
      <input type='password' placeholder='PASSWORD'></input></div>
   </div>
      <div className="forgotpassword">
        <span> Forgot Password ? </span></div>
    <div className="submitcontainer">
      <div className='submit'><Link to="/signup">SIGN UP</Link></div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className='submit'>LOGIN</div>
    </div>
    </div>
    </>
  );
}

export default signuplogin;