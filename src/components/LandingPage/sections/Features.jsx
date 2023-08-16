import React from 'react';
import Feature from './Feature';
import featuress from '../featuress';
import { Link } from 'react-router-dom';


function createFeature(feature){
  return(
    <Feature 
      key={feature.id}
      icon={feature.icon}
      title={feature.title}
      detail={feature.detail}
    />
  )
}

function Features(props) {
  return (
    <div className='allFeatures'>
      <span className='line'> </span>
        <div className='features'>
          {featuress.map(createFeature)}
        </div>
    </div>
  )
}


export default Features






