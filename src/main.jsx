import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/login-pages/Signin';
import SignUp from './components/login-pages/Signup';
import Info from './components/login-pages/Info';
import Contact from './components/login-pages/Contact';
import AiChat from './components/chat-pages/Aichat';
import Exercises from './components/SidePanel/Exercises';
import GetHelp from './components/SidePanel/GetHelp';
// import Settings from './components/chat-pages/Settings';

import './global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="sign-in" element={< SignIn />} />
        <Route path="sign-up" element={< SignUp />} />
        <Route path="info" element={< Info />} />
        <Route path="contact" element={< Contact />} />
        <Route path="aiChat" element={< AiChat />} />
        <Route path="exercises" element={< Exercises />} />
        <Route path="get-help" element={< GetHelp />}  />
        {/*<Route path="settings" element={< Settings />}  />
         */}
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 
root.render(<App />);
