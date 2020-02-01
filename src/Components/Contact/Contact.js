import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export class Contact extends Component {

  render() {
    return(
      <div className="div__contact">
        <h1>Contact</h1>
        <h3>Phone: 802-343-6110</h3>
        <h3>Email: jharvey@lundvt.org</h3>
      </div>
    )
  }
}