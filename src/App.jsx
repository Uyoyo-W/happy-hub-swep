import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './components/login-pages/Signin';
import SignUp from './components/login-pages/Signup';
import Info from './components/login-pages/Info';
import Contact from './components/login-pages/Contact';
import AiChat from './components/chat-pages/Aichat';
import Settings from './components/chat-pages/Settings';



function App() {
  return (
    <Routes>
      <Route exact path='/' elemet={<LandingPage />} />
      <Route path='sign-in' element={<SignIn/>} />
      <Route path='sign-up' element={<SignUp/>} />
      <Route path='info' element={<Info/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='aiChat' element={<AiChat/>} />
      <Route path='settings' element={<Settings/>} />
    </Routes>
  );
}

export default App;
