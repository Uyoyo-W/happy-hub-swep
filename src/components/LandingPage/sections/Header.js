import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/happyhublogo.png';
import happyhub from '../../../assets/Happyhub.svg'

function Header() {
  return (
    <div>
        <header className='header'>
          <nav className='navbar'>
            <div className='happyhub'>
              <Link to='/' className='image1'><img src={logo}></img></Link>
              <Link to='/' className='image2' ><img src={happyhub}></img></Link>
            </div>
            <ul className='nav-menu'>
              <li className='nav-item'><Link to='' className='nav-link'>Meditation</Link></li>
              <li className='nav-item'><Link to='' className='nav-link'>Community</Link></li>
              <li className='nav-item'><Link to='' className='nav-link'>About Us</Link></li>
              <li className='nav-item'><Link to='' className='nav-link'><button className='button'>Sign Up</button></Link></li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Header