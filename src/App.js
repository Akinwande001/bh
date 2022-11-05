import React from 'react';
import './App.css';
import {Profile, Link, Social, Footer} from "./section"
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Contact from './section/Contact';

function App() {
  return (
    <div className='App'>
      <Route exact path="/">
      <Profile />
    <Link /> 
    <Social />
      </Route>
      <Route exact path="/contact">
      <Contact />
      </Route>
    <Footer />
    </div>
  );
}

export default App;
