// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

import Send from "../chat-assets/send.svg";
import { useState } from 'react';
import '../chat-Styles/ai.scss';
import SidePanel from './SidePanel';


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
         <SidePanel/> 
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