import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Missions from './components/Missions';
import Planet from './components/Planet';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/planet/mars" element={<Planet />} />
      </Routes>
    </Router>
  );
}

export default App;
