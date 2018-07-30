import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editCurrentUser, updateUserPassword, deleteError} from '../store'

export class EditArtist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailUpdate: false,
      passUpdate: false
    }

    this.showEmailForm = this.showEmailForm.bind(this)
    this.showPasswordForm = this.showPasswordForm.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  showEmailForm(evt) {
    evt.preventDefault()
    this.setState({emailUpdate: true})
  }

  showPasswordForm(evt) {
    evt.preventDefault()
    this.setState({passUpdate: true})
  }

  changeEmail(evt) {
    evt.preventDefault()
    const userInfo = {
      email: evt.target.email.value
    }
    this.props.submitForm(this.props.id, userInfo)
    this.props.history.push('/account')
  }
  changePassword(evt) {
    evt.preventDefault()
    if (evt.target.newpassword.value === evt.target.confirmpassword.value) {
      this.props.submitPassForm(this.props.id, evt.target.newpassword.value)
      this.props.history.push('/account')
    }
  }

  renderErrorMessage() {
    setTimeout(() => this.props.renderError(), 3000)
  }

  render () {
    const error = this.props.error.error
    if (error) {
      this.renderErrorMessage()
    }
    return (
      <div className="outerAccountForm">
        <div className="editEmail">
          <h1>Email</h1>
          <h3>{this.props.email}</h3>
          {
            this.state.emailUpdate ? null
            :
            (
              <div>
                <button type="submit" onClick={this.showEmailForm}>Update</button>
              </div>
            )
          }
          {
            !this.state.emailUpdate ? null
            :
            (
              <div>
                <form onSubmit={this.changeEmail}>
                  <div>
                    <label htmlFor="email">New Email</label>
                    <input className="loginInput" name="email" type="text" />
                  </div>
                  <div>
                    <button type="submit">Change</button>
                  </div>
                </form>
              </div>
            )
          }
        </div>
        <div className="editPassword">
          <h1>Change Password</h1>
          {
            this.state.passUpdate ? null :
            (
              <div>
                <button type="submit" onClick={this.showPasswordForm}>Change</button>
              </div>
            )
          }
          {
            !this.state.passUpdate ? null
            :
            (
              <div>
                <form onSubmit={this.changePassword}>
                  <div>
                    <label htmlFor="password">New Password</label>
                    <input name="newpassword" type="password" />
                  </div>
                  <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input name="confirmpassword" type="password" />
                  </div>
                  <div>
                    <button type="submit">Change</button>
                  </div>
                  {error && (
                    <div className="loginError">
                      <p>Incorrect Password or Passwords Do Not Match!</p>
                    </div>
                  )}
                </form>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    id: state.user.id,
    email: state.user.email,
    error: state.error
  }
}

const mapDispatch = dispatch => ({
  submitForm(id, user){
    dispatch(editCurrentUser(id, user))
  },
  submitPassForm(id, pass){
    dispatch(updateUserPassword(id, pass))
  },
  renderError(){
    return dispatch(deleteError())
  }
});

export default connect(mapState, mapDispatch)(EditArtist);
