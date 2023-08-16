import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Bottom from './sections/Bottom';
import './LandingPage.scss';


function LandingPage() {
  return (
    <div className='landingPage'>
      <Header/>
      <Hero/>
      <Features/>
      <Bottom/>
    </div>
  )
}

export default LandingPage