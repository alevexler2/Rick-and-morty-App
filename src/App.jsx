import './App.css';
import React from "react";
import Homepage from './pages/homepage/Homepage';
import Personajes from './pages/Personajes/Personajes';
import Capitulos from './pages/capitulos/Capitulos';
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
   <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/capitulos" element={<Capitulos />} />
    </Routes>
   </div>
  );
}

export default App;
