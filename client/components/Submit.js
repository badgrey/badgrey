import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../public/styles/index.scss';

//for now static submit page with information how to reach us
class Submit extends Component {
  state = {
    sent: false
  };

  submit = async evt => {
    evt.preventDefault();
    const info = {
      name: evt.target.name.value,
      city: evt.target.city.value,
      soundcloud: evt.target.soundcloud.value,
      youtube: evt.target.youtube.value
    };
    await axios.post('/api/submit', info);
    document.getElementById('submitform').reset();
    this.setState({ sent: true });
  };

  render() {
    return this.state.sent ? (
      <div className="thankYouContainer">
        <div className="thankYou">
          <h2>Thank You For Submitting</h2>
          <h5>
            We Will Check You Out And See If You Are A Good Fit For Bad Grey
          </h5>
        </div>
      </div>
    ) : (
      <div className="outerSubmitForm">
        <form
          id="submitform"
          className="submitForm"
          onSubmit={this.submit}
          name={name}
        >
          <h2>Want To Be Featured On Bad Grey?</h2>
          <h4>Fill Out The Information Below</h4>
          <div className="topSubmitFormInputs">
            <div>
              <label className="submitFormLabel">Your Name</label>
              <input name="name" type="text" />
            </div>
            <div>
              <label className="submitFormLabel">Your Home City</label>
              <input name="city" type="text" />
            </div>
          </div>
          <div className="bottomSubmitFormInputs">
            <div>
              <label className="submitFormLabel">Link To Your Soundcloud</label>
              <input name="soundcloud" />
            </div>
            <div>
              <label className="submitFormLabel">
                Link To Your Music Video
              </label>
              <input name="youtube" />
            </div>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Submit);
