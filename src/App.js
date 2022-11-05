import React from 'react';
import './App.css';
import {Profile, Link, Social, Footer} from "./section"
import Contact from './section/Contact';

function App() {
  return (
    <div className='App'>
    <Profile />
    <Link /> 
    <Social />
    <Footer />
    <Contact />
    </div>
  );
}

export default App;
