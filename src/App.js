import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PortfolioFetch} from './pages/PortfolioFetch';
import {UnMarkFunds} from './pages/UnMarkFunds';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/portfolioFetch' element={<PortfolioFetch />} />
          <Route exact path='/unmarkFunds' element={<UnMarkFunds />} />
        </Routes>
      </Router>
    </>
  );
}

export { App };
