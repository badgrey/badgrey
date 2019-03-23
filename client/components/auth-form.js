import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth, deleteError, sendConfirmEmail, addError } from '../store';
import {Link} from 'react-router-dom'

export class AuthForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rand: '',
      checking: false,
      username: '',
      email: '',
      password: '',
      }
    this.sendEmail = this.sendEmail.bind(this)
    this.completeSignUp = this.completeSignUp.bind(this)
  }

  async sendEmail(evt) {
    evt.preventDefault();
      const formName = evt.target.name;
      this.setState({formName: formName})
      if (formName === 'signup') {
        const rand = Math.floor(((Math.random() * 10000) + 54))
        this.setState({rand: '' + rand})
        this.setState({username: evt.target.username.value})
        this.setState({email: evt.target.email.value})
        this.setState({password: evt.target.password.value})
        const info = {
          username: evt.target.username.value,
          rand: rand,
          email: evt.target.email.value
        }
        await this.props.handleSubmitSignUp(info)
        if ((this.props.error.error === undefined)) {
          this.setState({checking: true})
        }
        document.getElementById('codeForm').reset()
      }
      if (formName === 'login') {
        try {
          this.props.handleSubmitLogin(evt.target.username.value, evt.target.email.value, evt.target.password.value, formName)
        } catch (err) {
          console.log(err)
        }
      }
  }


  completeSignUp(evt) {
    evt.preventDefault();
    if (this.state.rand === evt.target.code.value) {
      this.props.submitForm(this.state.username, this.state.email, this.state.password, this.props.name)
      this.props.history.push('/')
    } else {
      this.props.wrongCodeError()
    }
  }

  renderErrorMessage() {
    setTimeout(() => this.props.renderError(), 3000)
  }

  render() {
    const { name, displayName} = this.props;
    const error = this.props.error.error
    if (error) {
      this.renderErrorMessage()
    }
    return (
      !this.state.checking ?
      <div className="outerForm">
        <form  className="form" onSubmit={this.sendEmail} name={name}>
          <h2>{this.props.displayName} Below</h2>
          <div>
            <label className="loginSignupLabel">Username</label>
            <input className="loginInput" name="username" type="text" />
          </div>
          <div>
            <label className="loginSignupLabel" htmlFor="email">Email</label>
            <input className="loginInput" name="email" type="text" />
          </div>
          <div>
            <label className="loginSignupLabel" htmlFor="password">Password</label>
            <input className="loginInput" name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {
            //will switch depending on name of form
            this.props.name !== 'login' ?
            <div className="loginSignupRoute">
              <h4>Already Have An Account? <Link to="/login">Login</Link></h4>
            </div>
            :
            <div className="loginSignupRoute">
              <h4>New To Us? <Link to="/signup">Sign Up</Link></h4>
            </div>
          }
          {error && (
            <div className="loginError">
            {
              //depending on error that returns from store, respected error message will be displayed
              error.error === 'Username Taken' || error.error === 'Email Already In Use' ?
              <p>{error.error}</p>
              :
              <p>Username or Password Incorrect</p>
            }
            </div>
          )}
        </form>
      </div>
      :
      <div className="outerForm" onSubmit={this.completeSignUp}>
          <form id="codeForm" className="form">
            <h2>Enter Code Below</h2>
            <h4>It Was Emailed To You</h4>
            <div>
              <label className="loginSignupLabel">Code</label>
              <input className="loginInput" name="code" type="text" />
            </div>
            <div>
              <button type="submit">Enter</button>
            </div>
            {error && (
              //everything above is meant for a code that will be emailed to the user signing up
              //below will be the error if they mess up
              <div className="loginError">
                <p>{error.error}</p>
              </div>
            )}
          </form>
      </div>
    );
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component.
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.error
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.error
  };
};

const mapDispatch = dispatch => {
  return {
     handleSubmitSignUp(info) {
        return dispatch(sendConfirmEmail(info))
    },
    handleSubmitLogin(username, email, password, formName) {
        return dispatch(auth(username, email, password, formName));
    },
    submitForm(username, email, pass, formName) {
        return dispatch(auth(username, email, pass, formName));
    },
    renderError(){
      return dispatch(deleteError())
    },
    wrongCodeError(){
      return dispatch(addError({error: 'Incorrect Code!'}))
    }
  };
};

export const Login = connect(
  mapLogin,
  mapDispatch
)(AuthForm);
export const Signup = connect(
  mapSignup,
  mapDispatch
)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  error: PropTypes.object
};
