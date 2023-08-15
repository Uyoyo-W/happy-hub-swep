// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../login-assets/Logo.svg'
import { Link } from "react-router-dom";
import '../login-styles/SignUp.scss'

function SignUp() {
  return (
    <div className='signup'>
        <div className='sign-up-container'>
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className='signup-header'>Sign Up</h1>
          <form className='sign-up-form'>
              <input placeholder='Email' type='email' name='email' className='mail'></input>
              <input placeholder='Username' type='text' name='name' className='username'></input>
              <input placeholder='Create Password' type='password' name="password" className='pass'></input>
              <input placeholder='Confirm Password' type='password' name="password" className='passconfirm'></input>
              <button className='continue-btn'><Link to='/Info' className='decor'>Continue</Link></button>
          </form>
        </div>
    </div>
  )
}

export default SignUp