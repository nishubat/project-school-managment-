import React from 'react'
import './loginsignup.css'
import { Link } from 'react-router-dom';
import user_icon from './person.png'
import password_icon from './password.png'
import email_icon from './email.png'
function loginsignup(){
  return (
   

    <><div className='container'>
      <div className="header">
        <div className="text">SIGN UP</div>
    <div className='inputs'></div>
    <div className='input'>
      <img src={user_icon} alt="" />
      <input type='text' placeholder='USERNAME'></input></div>
    <div className='input'>
      <img src={email_icon} alt="" />
      <input type='email' placeholder='EMAIL ADDRESS'></input></div>
    <div className='input'>
      <img src={password_icon} alt="" />
      <input type='password' placeholder='PASSWORD'></input></div>
    <div className='input'>
      <img src={password_icon} alt="" />
      <input type='password' placeholder='CONFIRM PASSWORD'></input>
      </div></div>
      <div className="forgotpassword">
        <label><input type="checkbox"/>Remember me</label><span> Have an account ? </span></div>
    <div className="submitcontainer">
      <div className='submit'>SIGN UP</div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className='submit'><Link to="/login">LOGIN </Link></div>
    </div>
    </div>
    </>
  );
}

export default loginsignup;