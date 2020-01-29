import React from 'react';
import Nav from './Components/Nav/Nav'
import '../src/Components/App/App.css';
import {Home} from './Components/Home/Home'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1__title">CYCLE EAST <span>and beyond</span></h1>
        <Nav />
        <Home />
      </header>
    </div>
  );
}

export default App;
