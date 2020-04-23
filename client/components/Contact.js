import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../public/styles/index.css';

//for now static submit page with information how to reach us
class Contact extends Component {
  state = {
    sent: false
  };

  submit = async evt => {
    console.log('running');
    evt.preventDefault();
    const info = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      message: evt.target.message.value
    };
    await axios.post('/api/contact', info);
    document.getElementById('contactform').reset();
    this.setState({ sent: true });
  };

  render() {
    return (
      <>
        {this.state.sent && (
          <div className="thankYouContainer">
            <div className="thankYou">
              <h2>Thank You For Submitting</h2>
              <h5>Someone will get back to you eventually</h5>
            </div>
          </div>
        )}
        {!this.state.sent && (
          <div className="outerContactForm">
            <form
              id="contactform"
              className="contactForm"
              onSubmit={this.submit}
              name={name}
            >
              <h2>Have A Question For Us?</h2>
              <h4>Fill Out The Information Below</h4>
              <div className="topContactFormInputs">
                <div>
                  <label className="contactFormLabel">Your Name</label>
                  <input name="name" type="text" />
                </div>
                <div>
                  <label className="contactFormLabel">Your Email</label>
                  <input name="email" type="email" />
                </div>
              </div>
              <div className="bottomContactFormInputs">
                <label className="contactFormLabel">What Do You Want</label>
                <textarea name="message" />
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        )}
      </>
    );
  }
}

const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Contact);
