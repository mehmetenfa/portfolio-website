import './App.css';
import React from 'react';
import './styles/Global.css'
import 'rsuite/dist/styles/rsuite-default.css'
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <div id='content'>
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
