import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import './index.css';
import Calculator from './components/calculator';
import './App.css';
import Header from './components/header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </>
);

export default App;
