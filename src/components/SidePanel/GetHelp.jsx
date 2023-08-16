import React from 'react';
import SidePanel from '../chat-pages/SidePanel';
import alert from './getHelp-assets/alert.svg';
import phone from './getHelp-assets/phone.svg';
import chat from './getHelp-assets/chatt.svg'
import './GetHelp.scss'

function GetHelp() {
  return (
    <div className='getHelp'>
        <SidePanel/>
        <div className='container'>
        <div className='alert'>
            <img src={alert}></img>
        </div>
            <div className='crisis'>
                <h4>Are you in crisis?</h4>
                <p id='p1'>If you are experiencing a mental health crisis or any  immediate danger to yourself,<br></br>please seek help immediately. <br></br>Here are some resources to support you during such times:</p>
                <p id='p2'>Call or  text the National Suicide<br></br>Prevention Lifeline:</p>
                <div className='econtacts'>
                    <div className='econtact'>
                        <img src={phone}></img>
                        <p>+234-xxxx-xxxx</p>
                    </div>
                    <div className='econtact' id='contact2'>
                        <img src={chat} ></img>
                        <p>Lifeline chat</p>
                    </div>
                    <div className='econtact' id='contact3'>
                        <p>Talk to loved ones</p>
                    </div>
                    <div className='econtact'>
                        <img src={phone}></img>
                        <p>Emergency Contact 1</p>
                    </div>
                    <div className='econtact'>
                        <img src={phone}></img>
                        <p>Emergency Contact 2</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetHelp