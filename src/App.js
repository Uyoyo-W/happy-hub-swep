import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
    </Routes>
  );
}

export default App;
