import React from 'react';
import apple from '../assets/apple.svg';
import google from '../assets/playstore.svg';
import phone1 from '../assets/Space Black iPhone 14 Pro Mockup.png';
import phone2 from '../assets/iPhone 14 Pro Space Black Mockup.png';
import Footer from './Footer';

function Bottom() {
  return (
    <div className='pageBottom'>
        <div className='get'>
            <div className='app'>
                <div className='text'>
                    <h1>GET THE APP</h1>
                    <h4>Coming soon!!!</h4> 
                </div>
                <div className='stores'>
                    <div className='apple store'>
                        <img src={apple}></img>
                    </div>
                    <div className='google store'>
                        <img src={google}></img>
                    </div>
                </div>
            </div>
            <div className='phones'>
                <div className='phone1 phone'>
                    <img src={phone1}></img>
                </div>
                <div className='phone2 phone'>
                    <img src={phone2}></img>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Bottom