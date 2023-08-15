import React from 'react'
import logo from '../login-assets/Logo.svg'
import { Link } from "react-router-dom";
import '../login-styles/Contact.scss';

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className='contact-header'>Emergency Contacts</h1>
            <h3>Please provide contact details incase of emergencies</h3>
            <form className='contact-form'>
                <label htmlFor="contact-one-email" className='label-1'>Contact 1</label>
                <input placeholder='Email' type='email'  id="contact-one-email" name='email' className='contact-one-mail'></input>
                <input placeholder='Phone Number' type='text' name='number' className='phone-number-one'></input>
                <label htmlFor="contact-two-email" className='label-2'>Contact 2</label>
                <input placeholder='Email' type='email'  id="contact-two-email" name='email' className='contact-two-mail'></input>
                <input placeholder='Phone Number' type='text' name='number' className='phone-number-two'></input>
                <Link to="/Aichat" className='contact-link'><button className='finish'>Finish</button> </Link>         
            </form>
        </div>
    </div>
  )
}

export default Contact