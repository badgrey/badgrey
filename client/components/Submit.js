import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../public/style.css';

//for now static submit page with information how to reach us
class Submit extends Component {

  submit = async (evt) => {
    evt.preventDefault();
    const info = {
      name: evt.target.name.value,
      city: evt.target.city.value,
      soundcloud: evt.target.soundcloud.value,
      youtube: evt.target.youtube.value
    }
    await axios.post('/api/submit', info)
  }
  render(){
    return (
      <div className="outerForm">
          <form  className="form" onSubmit={this.submit} name={name}>
            <h2>Want To Be Featured On Bad Grey?</h2>
            <h4>Fill Out The Information Below</h4>
            <div className="topInputs">
              <div>
                <label className="loginSignupLabel">Your Name</label>
                <input className="loginInput" name="name" type="text" />
              </div>
              <div>
                <label className="loginSignupLabel">Your Home City</label>
                <input className="loginInput" name="city" type="text" />
              </div>
            </div>
            <div className="bottomInputs">
              <div>
                <label className="loginSignupLabel">Link To Your Soundcloud</label>
                <input className="loginInput" name="soundcloud" />
              </div>
              <div>
                <label className="loginSignupLabel">Link To Your Music Video</label>
                <input className="loginInput" name="youtube" />
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

export default connect(
  mapState,
  mapDispatch
)(Submit);
