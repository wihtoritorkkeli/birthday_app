import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import Location from './pages/Location';
import Sitsit from './pages/Sitsit';
import {Route, Link, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/location" element={<Location />}/>
      <Route exact path="/sitsit" element={<Sitsit />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
