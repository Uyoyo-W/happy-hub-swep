import React from 'react';
import arrow from '../assets/arrow.svg';

function Feature(props) {
  return (
    <div className='feature'>
        <img src={props.icon} className='icon'></img>
        <h3>{props.title}</h3>
        <p className = 'p1'>{props.detail}</p>
        <span className='bottom'><p className = 'p2'>Get started</p> <img src={arrow} className='arrow'></img></span>
    </div>
  )
}

export default Feature