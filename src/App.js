import './App.css';
import React from 'react';
import './styles/Global.css'
import 'rsuite/dist/styles/rsuite-default.css'
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <div id='content'>
        <Intro></Intro>
      </div>
    </div>
  );
}

export default App;
