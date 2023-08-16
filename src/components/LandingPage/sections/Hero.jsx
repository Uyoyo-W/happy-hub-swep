import React from 'react';
import { Link } from 'react-router-dom';
import AI from '../assets/aibrain.png'

function Hero() {
  return (
    <div className='hero'>
        <div className='text'>
            <h1>A Place To Feel<br></br> <span className='better'>Better</span><br></br> Wherever You Go</h1>
            <p>Embrace the future of healing minds. Welcome to the<br></br> realm of AI therapy, where compassion and technology converge to mend the soul.</p>
            <Link to=''><button className='button'>Get Started</button></Link>
        </div>
        <div className='AI'>
            <img src={AI}></img>
        </div>
    </div>
  )
}

export default Hero