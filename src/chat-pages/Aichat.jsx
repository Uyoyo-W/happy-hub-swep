// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../login-assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import '../chat-Styles/ai.css'

function Aichat() {
  return (
    <div className="chat">
      <div className='chat-container'>
        <div className='nav-container'>
          <nav>
                <div className='logo-container'>
                  <img src={logo} alt="logo" style={{
                    height:80,
                    width:80,
                  }}></img>
                < h1 className='lost'>Happyhub</h1>
                </div>
                <div className='links'>
                    <NavLink className='link-decor'><Link className="decor"><img></img>Buddy</Link></NavLink>
                    <NavLink className='link-decor'><Link className="decor"><img></img>Exercises</Link></NavLink>
                    <NavLink className='link-decor'><Link className="decor"><img></img>Community</Link></NavLink>
                </div>
                <div className='utility'>
                  <NavLink className='link-decor'><Link className="decor"><img></img> Get Help</Link></NavLink>
                  <NavLink className='link-decor'><Link className="decor"><img></img>Settings</Link></NavLink>
                </div>
            </nav>
        </div>
        <div className='chat-area'>
            <div className='send-message'>
              <textarea placeholder='Tell me, what&#39;s on your mind'></textarea>
              <img></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aichat