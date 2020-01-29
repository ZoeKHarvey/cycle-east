import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './Nav.css'

export default class Nav extends Component {
  
  render() {
    return (
      <div className="div__nav">
        <Link to='/'>
          <h3>Home</h3>
        </Link>
        <Link to='/routes'>
          <h3>Routes</h3>
        </Link>
        <Link to='/about'>
          <h3>About</h3>
        </Link>
        <Link to='/contact'> 
          <h3>Contact</h3>
        </Link>
      </div>
      
    )
  }
}