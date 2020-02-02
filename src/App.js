import React from 'react';
import Nav from './Components/Nav/Nav';
import {Routes} from './Components/Routes/Routes'
import '../src/Components/App/App.css';
import {Home} from './Components/Home/Home';
import {Contact} from './Components/Contact/Contact';
import {About} from './Components/About/About'
import { Route } from 'react-router-dom';
import { Prep } from './Components/Prep/Prep'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1__title">CYCLE EAST <span className="app__span">& beyond</span></h1>
        <Nav />
        <Route exact path='/' render={() => <>
          <Home /></>
        }/>
        <Route exact path='/routes' render={() => <>
          <Routes /> </>
        }/>
        <Route exact path='/contact' render={() => <>
          <Contact /> </>
        }/>
        <Route exact path='/about' render={() => <>
          <About /> </>
        }/>
        <Route exact path='/prepare' render={() => <>
          <Prep /> </>
        }/>
      </header>
    </div>
  );
}

export default App;
