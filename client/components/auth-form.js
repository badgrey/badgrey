import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth, deleteError, sendConfirmEmail } from '../store';

export class AuthForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rand: '',
      checking: false,
      email: '',
      password: ''
      }
    this.sendEmail = this.sendEmail.bind(this)
    this.completeSignUp = this.completeSignUp.bind(this)
  }

  sendEmail(evt) {
    evt.preventDefault();
      const formName = evt.target.name;
      this.setState({formName: formName})
      if (formName === 'signup') {
        const rand = Math.floor(((Math.random() * 10000) + 54))
        this.setState({rand: '' + rand})
        this.setState({checking: true})
        this.setState({email: evt.target.email.value})
        this.setState({password: evt.target.password.value})
        const info = {
          rand: rand,
          email: evt.target.email.value
        }
        this.props.handleSubmitSignUp(info)
      }
      if (formName === 'login') {
        this.props.handleSubmitLogin(evt.target.email.value, evt.target.password.value, formName)
        this.props.history.push('/home')
      }
  }


  completeSignUp(evt) {
    evt.preventDefault();
    if (this.state.rand === evt.target.code.value) {
      this.props.submitForm(this.state.email, this.state.password, this.props.name)
      this.props.history.push('/home')
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
      <div className="loginBorder">
        <form className="form" onSubmit={this.sendEmail} name={name}>
          <h2>{this.props.displayName} Below</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input className="loginInput" name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && (
            <div className="loginError">
              <p>Username or Password Incorrect</p>
            </div>
          )}
        </form>
      </div>
      :
      <div className="loginBorder" onSubmit={this.completeSignUp}>
          <form className="form">
            <h2>Enter Code Below</h2>
            <div>
              <label>Code</label>
              <input className="loginInput" name="code" type="text" />
            </div>
            <div>
              <button type="submit">Enter</button>
            </div>
            {error && (
              <div className="loginError">
                <p>Incorrect Code!</p>
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
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
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
    handleSubmitLogin(email, password, formName) {
        return dispatch(auth(email, password, formName));
    },
    submitForm(email, pass, formName) {
        return dispatch(auth(email, pass, formName));
    },
    renderError(){
      return dispatch(deleteError())
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
