import React from 'react';
import Nav from './Components/Nav/Nav'
import '../src/Components/App/App.css';
import lake from '../src/assets/dark-lake.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1__title">CYCLE EAST <span>and beyond</span></h1>
        <Nav />
        <img src={lake} />
      </header>
    </div>
  );
}

export default App;
