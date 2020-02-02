import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email:'',
      content:'',
      error : ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    // Will eventually send email on click
    if(this.state.name || this.state.email || this.state.content === '') {
      this.setState({ error: 'Please fill in required fields to continue'})
    }
    if(this.state.error === '') {
      this.setState({ name: '', email: '', content: ''})
    }
  }



  render() {
    return(
      <div className="div__contact">
        <h1>Contact</h1>
        <h3>Phone: 802-343-6110</h3>
        <h3>Email: jharvey@anemailaddress.com</h3>
        <div className="div__contact--form">
          <input 
            placeholder="Name" 
            className="input__contact--name" 
            name="name" 
            value={ this.state.name } 
            onChange={ this.handleChange } />
          <input 
            placeholder="Email *optional" 
            className="input__contact--email" 
            name="email" 
            value={ this.state.email } 
            onChange={ this.handleChange } />
          <textarea
            placeholder="Inquiry" 
            className="input__contact--content" 
            name="content" 
            value={ this.state.content } 
            onChange={ this.handleChange } />
          <button className="button__contact--submit" onClick={ this.handleSubmit }>Submit</button>
        </div>
      </div>
    )
  }
}