import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth, deleteError } from '../store';

/**
 * COMPONENT
 */
export class AuthForm extends Component {
  renderErrorMessage() {
    console.log('MADE IT HERE')
    setTimeout(() => this.props.renderError(), 3000)
  }

  render() {
    const { name, displayName, handleSubmit } = this.props;
    const error = this.props.error.error
    console.log('PROPS', this.props)
    console.log("error", error)
    if (error) {
      console.log('HITTING THIS CONDITION')
      this.renderErrorMessage()
    }
    return (
      <div className="loginBorder">
        <form className="form" onSubmit={handleSubmit} name={name}>
          <h2>Login Below</h2>
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
              <p>Please Login with Existing Account</p>
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
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      return dispatch(auth(email, password, formName));
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
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
