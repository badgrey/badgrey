import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  editCurrentUser,
  updateUserPassword,
  deleteError,
  addError
} from '../store';
import '../../public/styles/index.scss';

//for user editing their own information
export class EditArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailUpdate: false,
      passUpdate: false
    };

    this.showEmailForm = this.showEmailForm.bind(this);
    this.showPasswordForm = this.showPasswordForm.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  //lets their email form show
  showEmailForm(evt) {
    evt.preventDefault();
    this.setState({ emailUpdate: true });
  }

  //lets their password form show
  showPasswordForm(evt) {
    evt.preventDefault();
    this.setState({ passUpdate: true });
  }

  //submits the email change
  changeEmail(evt) {
    evt.preventDefault();
    const userInfo = {
      email: evt.target.email.value
    };
    this.props.submitForm(this.props.id, userInfo);
    this.props.history.push('/account');
  }
  //submits the password change
  changePassword(evt) {
    evt.preventDefault();
    if (
      evt.target.newpassword.value === evt.target.confirmpassword.value &&
      evt.target.newpassword.value !== ''
    ) {
      this.props.submitPassForm(this.props.id, evt.target.newpassword.value);
      this.props.history.push('/account');
    } else {
      this.props.wrongCodeError();
    }
  }

  //gets rid of error message
  renderErrorMessage() {
    setTimeout(() => this.props.renderError(), 3000);
  }

  render() {
    const error = this.props.error.error;
    if (error) {
      this.renderErrorMessage();
    }
    return (
      <div className="outerAccountForm">
        <div className="editEmail">
          <h1>Email</h1>
          <h3>{this.props.email}</h3>
          {//checks state to render email form
          this.state.emailUpdate ? null : (
            <div>
              <button
                className="accountButton"
                type="submit"
                onClick={this.showEmailForm}
              >
                Update
              </button>
            </div>
          )}
          {!this.state.emailUpdate ? null : (
            <div>
              <form onSubmit={this.changeEmail}>
                <div>
                  <label className="accountLabel" htmlFor="email">
                    New Email
                  </label>
                  <input className="accountInput" name="email" type="text" />
                </div>
                <div>
                  <button className="accountButton" type="submit">
                    Change
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="editPassword">
          <h1>Change Password</h1>
          {//checks state to render password form
          this.state.passUpdate ? null : (
            <div>
              <button
                className="accountButton"
                type="submit"
                onClick={this.showPasswordForm}
              >
                Change
              </button>
            </div>
          )}
          {!this.state.passUpdate ? null : (
            <div>
              <form onSubmit={this.changePassword}>
                <div>
                  <label className="accountLabel" htmlFor="password">
                    New Password
                  </label>
                  <input
                    className="accountInput"
                    name="newpassword"
                    type="password"
                  />
                </div>
                <div>
                  <label className="accountLabel" htmlFor="password">
                    Confirm Password
                  </label>
                  <input
                    className="accountInput"
                    name="confirmpassword"
                    type="password"
                  />
                </div>
                <div>
                  <button className="accountButton" type="submit">
                    Change
                  </button>
                </div>
                {error && (
                  <div className="changePassError">
                    <p>{error.error}</p>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    id: state.user.id,
    email: state.user.email,
    error: state.error
  };
};

const mapDispatch = dispatch => ({
  submitForm(id, user) {
    dispatch(editCurrentUser(id, user));
  },
  submitPassForm(id, pass) {
    dispatch(updateUserPassword(id, pass));
  },
  renderError() {
    return dispatch(deleteError());
  },
  wrongCodeError() {
    return dispatch(
      addError({ error: 'Incorrect Password or Passwords Do Not Match!!' })
    );
  }
});

export default connect(mapState, mapDispatch)(EditArtist);
