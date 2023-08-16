import React from 'react';
import trees from './assets/trees.png';
import music from './assets/music.png';
import sit from './assets/sit.png';
import head from './assets/head.png';
import belly from './assets/belly.png';
import abdomen from './assets/abdomen.png';
import './Exercises.scss';
import SidePanel from '../chat-pages/SidePanel';
import { Link } from 'react-router-dom';


function Exercises() {
  return (
   <div className='the-exercises'>
     <SidePanel/>
    <div className='container'>
      <div className='exercises'>
          <div className='music exercise'>
            <h1>Music</h1>
            <div className='playlists row'>
              <div className='playlist box'>
                <Link to='https://open.spotify.com/playlist/37i9dQZF1DWXe9gFZP0gtP?si=djTnDMUUS2WG8XF1witPNw' target='_blank'><img src={trees}></img></Link>
                <p>Mental Health Walk</p>
              </div>
              <div className='playlist box'>
                <Link to='https://open.spotify.com/playlist/2Al9G2jrWkwDlRFMZaw1GX?si=LwyJu-xqShSMjbqHcEV9HA' target='_blank'><img src={music}></img></Link>
                <p>Mental Health Walk</p>
              </div>
              <div className='playlist box'>
                <Link to='https://open.spotify.com/playlist/37i9dQZF1EIfk2N1Y8uPoA?si=-MqKqxNhS96Cfwj7P2hytg' target='_blank'><img src={sit}></img></Link>
                <p>Mental Health Walk</p>
              </div>
            </div>
          </div>

          <div className='movement exercise'>
            <h1>Movement</h1>
            <div className='moves row'>
              <div className='move box'>
                <Link to='https://youtu.be/COp7BR_Dvps' target='_blank'><img src={head}></img></Link>
                {/* <p>Mental Health Walk</p> */}
              </div>
              <div className='move box'>
                <Link to='https://youtu.be/9MazN_6wdqI'><img src={belly}></img></Link>
                {/* <p>Mental Health Walk</p> */}
              </div>
              <div className='move box'>
                <Link to='https://youtu.be/4TQsfBYCyKQ'><img src={abdomen}></img></Link>
                <p>Breath Appreciation</p>
              </div>
            </div>
          </div>
      </div>
    </div>
   </div>
  )
}

export default Exercises