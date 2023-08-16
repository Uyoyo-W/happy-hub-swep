import React from 'react';
import logo from '../login-assets/Logo.svg';
import happyhub from '../chat-assets/Happpyhub.png'
import Activities from "../chat-assets/activities.svg";
import Buddy from "../chat-assets/Buddy.svg";
import Community from "../chat-assets/community.svg";
import Help from "../chat-assets/help.svg";
import SettingsImg from "../chat-assets/settings.svg";
import Log from "../chat-assets/bx_log-out.svg";
import { Link } from "react-router-dom";


function SidePanel() {
  return (
    <nav className='ai-nav'>
      <div className='logo-container'>
        <img src={logo} alt="logo" className='logo'></img>
        <img src={happyhub} className='happy'></img>
      </div>
      <div className='links'>
        <Link className="decor bud" to='/Aichat'><img src={Buddy}></img><p>Buddy</p></Link>
        <Link className="decor" to='/Aichat'><img src={Community}></img><p>Community</p></Link>
        <Link className="decor" to='/exercises'><img src={Activities}></img><p>Exercises</p></Link>
      </div>
      <div className='utility'>
        <Link className="decor"><img src={Help}></img> <p>Get Help</p></Link>
        <Link className="decor" to="/Settings"><img src={SettingsImg}></img><p>Settings</p></Link>
        <Link className="decor"><img src={Log}></img><p>Log Out</p></Link>
      </div>
    </nav>
  )
}

export default SidePanel