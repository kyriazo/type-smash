import React from 'react';
import './App.css';
import Words from './Words/Words';
import Typearea from './Typearea/Typearea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Type-Smash</h1>
        <h2>Test your typing skills!</h2>
      </header>
      <div className='inputContainer'>
        <Words />
        <Typearea />
      </div>
    </div>
  );
}

export default App;
