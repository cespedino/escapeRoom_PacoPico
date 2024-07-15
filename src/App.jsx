import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Instrucciones from './pages/Instrucciones';
import Teorema from './pages/Teorema';
import Leyenda from './pages/Leyenda';
import './Styles/main.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
        <Route path="/teorema" element={<Teorema />} />
        <Route path="/leyenda" element={<Leyenda />} />
      </Routes>
    </Router>
  );
}

export default App;


