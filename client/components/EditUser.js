import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editCurrentUser} from '../store/user'

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
    this.props.submitEmailForm(this.props.id, userInfo)
  }

  render () {

    return (
      <div>
        <div>
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
                <form>
                  <div>
                    <label htmlFor="email">New Email</label>
                    <input className="loginInput" name="email" type="text" />
                  </div>
                  <div>
                    <button onSubmit={this.changeEmail} type="submit">Change</button>
                  </div>
                </form>
              </div>
            )
          }
        </div>
        <div>
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
                <form>
                  <div>
                    <label htmlFor="password">Old Password</label>
                    <input name="password" type="password" />
                  </div>
                  <div>
                    <label htmlFor="password">New Password</label>
                    <input name="password" type="password" />
                  </div>
                  <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input name="password" type="password" />
                  </div>
                  <div>
                    <button type="submit">Change</button>
                  </div>
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
    password: state.user.password
  }
}

const mapDispatch = dispatch => ({
  submitEmailForm(id, user){
    dispatch(editCurrentUser(id, user))
  }
});

export default connect(mapState, mapDispatch)(EditArtist);
