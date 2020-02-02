import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './Nav.css'

export default class Nav extends Component {
  
  render() {
    return (
      <div className="div__nav">
        <Link to='/'>
          <h3 className="h3__nav--tab">Home</h3>
        </Link>
        <Link to='/about'>
          <h3 className="h3__nav--tab">About</h3>
        </Link>
        <Link to='/routes'>
          <h3 className="h3__nav--tab">Routes & Rates</h3>
        </Link>
        <Link to='/prepare'>
          <h3 className="h3__nav--tab">Prepare</h3>
        </Link>
        <Link  to='/contact'> 
          <h3 className="h3__nav--tab">Contact</h3>
        </Link>
      </div>
      
    )
  }
}