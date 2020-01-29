import React, { Component } from 'react';
import  './Nav.css'

export default class Nav extends Component {
  
  render() {
    return (
      <div className="div__nav">
        <h3>Home</h3>
        <h3>Routes</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
      
    )
  }
}