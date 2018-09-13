import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import '../../public/style.css'
import { slide as Menu } from 'react-burger-menu'

class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false
    }
    this.renderDropDown = this.renderDropDown.bind(this)
  }

  renderDropDown(evt) {
    evt.preventDefault()
    if (this.state.clicked === false) {
      this.setState({clicked: true})
    } else {
      this.setState({clicked: false})
    }
  }

  render() {

    return (
      <div className="navbar">
        <div>
          <Link to="/">
            <img className="badGreyTextLogo" src={require('../../public/images/badGreyTextLogoWhite.png')} />
          </Link>
        </div>
        <div className="navList">
          <Link to="/discover">
            Discover
          </Link>
          <Link to="/playlists">
            Playlists
          </Link>
          <Link to="/interviews">
            Interviews
          </Link>
          <Link to="/freshman">
            Freshman List
          </Link>
        </div>
        <nav>
        {/* The navbar will show these links after you log in */}
          {this.props.isLoggedIn ? (
            <div className="navLinks">
              <div>
              {
                this.props.isAdmin ?
                <div>
                  <div onClick={this.renderDropDown}>
                    <img className="badGreyWolfLogo" src={require('../../public/images/badGreyWolfLogo.png')} />
                  </div>
                  {
                    this.state.clicked === false ? null :
                  <div className="navOptions">
                    <div className="singleNavOption">
                      <Link to="/newArtist">
                        Add Artist
                      </Link>
                    </div>
                    <div className="singleNavOption">
                      <Link to="/account">
                      Account
                      </Link>
                    </div>
                    <div className="singleNavOption">
                      <Link to="/saved">
                      Saved
                      </Link>
                    </div>
                    <div className="singleNavOption">
                      <Link to="/users">
                      Users
                      </Link>
                    </div>
                    <div className="singleNavOption">
                      <a href="#" onClick={this.props.handleClick}>
                      Logout
                      </a>
                    </div>
                  </div>
                }
                </div>
                    :
                    <div className="navOptions">
                      <div onClick={this.renderDropDown}>
                        <img className="badGreyWolfLogo" src={require('../../public/images/badGreyWolfLogo.png')} />
                      </div>
                    {
                      this.state.clicked === false ? null :
                      <div>
                        <div className="singleNavOption">
                          <Link to="/account">
                          Account
                          </Link>
                        </div>
                        <div className="singleNavOption">
                          <Link to="/saved">
                          Saved
                          </Link>
                        </div>
                        <div className="singleNavOption">
                          <a href="#" onClick={this.props.handleClick}>
                          Logout
                          </a>
                        </div>
                      </div>
                    }
                    </div>
                  }
              </div>
            </div>
          ) : (
            <div className="navLinks">
              <div>
                <div onClick={this.renderDropDown}>
                  <img className="badGreyWolfLogo" src={require('../../public/images/badGreyWolfLogo.png')} />
                </div>
              {
                this.state.clicked === false ? null :
                <div className="navOptions">
                    {/* The navbar will show these links before you log in */}
                  <div className="singleNavOption">
                    <Link to="/login">
                      Login
                    </Link>
                  </div>
                  <div className="singleNavOption">
                    <Link to="/signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              }
              </div>
            </div>
          )}
        </nav>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
