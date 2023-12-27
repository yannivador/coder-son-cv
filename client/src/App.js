
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledges" element={<Knowledges />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;