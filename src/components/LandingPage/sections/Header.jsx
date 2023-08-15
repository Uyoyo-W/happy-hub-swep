import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/hhlogo.png';
import happyhub from '../assets/Happyhub.svg';
import close from '../assets/cancel button.png';
import open from '../assets/menu.png'


function Header() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const closeMenu = () => {
    setHamburgerOpen(false)
  }
  return (
    <div>
        <header className='header'>
          <nav className={`${ hamburgerOpen ? 'show-menu' : null }`}>
            <div className='happyhub'>
              <Link to='/' className='image1'><img src={logo} alt='logo'></img></Link>
              <Link to='/' className='image2' ><img src={happyhub} alt='logo'></img></Link>
            </div>
            <ul className='nav-menu' style={ hamburgerOpen ? {visibility: 'visible'}  : null }>
              <li className='nav-item'><Link to='' className='nav-link'>Meditation</Link></li>
              <li className='nav-item'><Link to='' className='nav-link'>Community</Link></li>
              <li className='nav-item'><Link to='' className='nav-link'>About Us</Link></li>
              <li className='nav-item'><Link to='/sign-in' className='nav-link'><button className='button'>Sign Up</button></Link></li>
            </ul>
            <button className='menu' 
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
              }}
          >
            {hamburgerOpen ? (
              <img src={close}></img>
            ) : ( 
              <img src={open}></img>
            )}
          </button>
          </nav>
        </header>
    </div>
  )
}

export default Header