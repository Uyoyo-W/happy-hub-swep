import React from 'react';
import { Link } from 'react-router-dom';
import Happyhub from '../assets/Happyhubold.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className='happyhub'>
            <Link to='/'><img src={Happyhub}></img></Link>
            <p>The AI companion that cares</p>
        </div>
        <div className='resources'>
            <div className='menus'>
                <ul className='help menu'>
                    <h6>Help</h6>
                    <Link to='' className='link'><li>Support</li></Link>   
                    <Link to='' className='link'><li>Knowledgebase</li></Link>
                    <Link to='' className='link'><li>Tutorials</li></Link>
                </ul>
                <ul className='footer-features menu'>
                    <h6>Features</h6>
                    <Link to='' className='link'><li>Community</li></Link>
                    <Link to='' className='link'><li>AI Interaction</li></Link>
                    <Link to='' className='link'><li>File Sharing</li></Link>
                    <Link to='' className='link'><li>User Management</li></Link>
                </ul>
            </div>
            <div className='menus'>
                <ul className='company menu'>
                    <h6>Company</h6>
                    <Link to='' className='link'><li>About Us</li></Link>
                    <Link to='' className='link'><li>Careers</li></Link>
                    <Link to='' className='link'><li>Contact Us</li></Link>
                </ul>
                <ul className='contact-us menu'>
                    <h6>Contact</h6>
                    <Link to='' className='link'><li>info@chatapp.com</li></Link>
                    <Link to='' className='link'><li>1-800-200-300</li></Link>
                    <Link to='' className='link'><li>3500 Deer Creek Rd Palo Alto, CA</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer