import React from 'react';
import Nav from './Components/Nav/Nav'
import '../src/Components/App/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CYCLE EAST <span>and beyond</span></h1>
        <Nav />
      </header>
    </div>
  );
}

export default App;
