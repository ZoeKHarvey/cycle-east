import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export class Contact extends Component {
  constructor() {
    this.state = {
      name = '',
      email='',
      content = ''
    }
  }

  render() {
    return(
      <div className="div__contact">
        <h1>Contact</h1>
        <h3>Phone: 802-343-6110</h3>
        <h3>Email: jharvey@lundvt.org</h3>
        <div className="div__contact--form">
          <input placeholder="Name" className="input__contact--name" />
          <input placeholder="Email *optional" className="input__contact--email" />
          <input placeholder="Inquiry" className="input__contact--email"/>
          <button className="button__contact--submit">Submit</button>
        </div>
      </div>
    )
  }
}