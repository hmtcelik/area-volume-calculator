import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './index.css';

import Home from './Home';
import Navbar from './Navbar';
import Sphere from './Sphere';
import Cylinder from './Cylinder';
import Cone from './Cone';
import Rectangular from './Rectangular';
import Triangular from './Triangular';
import PageNotFound from './PageNotFound';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path='/area-volume-calculator' element={<Home />} />
          <Route exact path='/sphere' element={<Sphere/>}/>
          <Route exact path='/cylinder' element={<Cylinder/>}/>
          <Route exact path='/cone' element={<Cone/>}/>
          <Route exact path='/rectangular' element={<Rectangular/>}/>
          <Route exact path='/triangular' element={<Triangular/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
