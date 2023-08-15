// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../login-assets/Logo.svg';
import happyhub from '../chat-assets/Happpyhub.png'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import Activities from "../chat-assets/activities.svg";
import Buddy from "../chat-assets/Buddy.svg";
import Community from "../chat-assets/community.svg";
import Help from "../chat-assets/help.svg";
import SettingsImg from "../chat-assets/settings.svg";
import Log from "../chat-assets/bx_log-out.svg";
import Send from "../chat-assets/send.svg";
import { useState } from 'react';
import '../chat-Styles/ai.scss';


function AiChat() {
  const [chatInput, setChatInput] = useState("");
  const [chatOutput, setChatOutput] = useState("");

  const handleChatInput = (e) => {
    console.log(e.target.value)
    setChatInput(e.target.value)
  }

  const fetchAPI = async () => {
    const formdata = new FormData();
    formdata.append("user_input", chatInput);
    console.log(chatInput)

    const options = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    console.log(`before: ${chatOutput}`)
    const req = await fetch("https://therapy-bot.herokuapp.com/chat", options)
    const resp = await req.text();
    console.log(`After: ${resp}`)
    setChatOutput(resp);

    setChatInput("")
  }
  return (
    <div className="chat">
      <div className='chat-container'>
        <div className='nav-container'>
          <nav className='ai-nav'>
            <div className='logo-container'>
              <img src={logo} alt="logo" className='logo'></img>
              <img src={happyhub} className='happy'></img>
            </div>
            <div className='links'>
              <Link className="decor bud"><img src={Buddy}></img><p>Buddy</p></Link>
              <Link className="decor"><img src={Community}></img><p>Community</p></Link>
              <Link className="decor"><img src={Activities}></img><p>Exercises</p></Link>
            </div>
            <div className='utility'>
              <Link className="decor"><img src={Help}></img> <p>Get Help</p></Link>
              <Link className="decor" to="/Settings"><img src={SettingsImg}></img><p>Settings</p></Link>
              <Link className="decor"><img src={Log}></img><p>Log Out</p></Link>
            </div>
          </nav>
        </div>
        <div className='chat-area'>
          <div className='see-message' style={{fontSize: "16px", color: "black", fontWeight: "500"}}>
            <p>{chatOutput}</p>
          </div>
          <div className='send-message'>
            <textarea value={chatInput} onChange={handleChatInput} placeholder='Tell me, what&#39;s on your mind'></textarea>
            <button className='send' onClick={fetchAPI}><img src={Send} style={{
              height: 24,
              width: 24,
            }}></img></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiChat