import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import '../../public/style.css'
import { slide as Menu } from 'react-burger-menu'

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div className="navbar">
    <div className="badGreyTextLogo">
      <img className="badgrey" src={require('../../public/images/badGreyTextLogoWhite.png')} />
    </div>
    <nav>
      {isLoggedIn ? (
        <div className="navLinks">
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/">
              <img className="badGreyWolfLogo" src={require('../../public/images/badGreyWolfLogo.png')} />
            </Link>
          </div>
          <div>
          {
            isAdmin ?
            <Menu width="80px" isOpen={true}>
              <Link to="/newArtist" className="menu-item">
                Add Artist
              </Link>
              <Link to="/account" className="menu-item">
              Account
              </Link>
              <Link to="/saved" className="menu-item">
              Saved
              </Link>
              <a className="menu-item" href="#" onClick={handleClick}>
              Logout
              </a>
            </Menu>
                :
            <Menu width="80px" isOpen={true}>
              <Link to="/account" className="menu-item">
              Account
              </Link>
              <Link to="/saved" className="menu-item">
              Saved
              </Link>
              <a className="menu-item" href="#" onClick={handleClick}>
                Logout
              </a>
            </Menu>
              }
          </div>
        </div>
      ) : (
        <div className="navLinks">
            {/* The navbar will show these links before you log in */}
          <Link to="/">
            <img className="badGreyWolfLogo" src={require('../../public/images/badGreyWolfLogo.png')} />
          </Link>
          <Menu width="80px" isOpen={true}>
            <Link to="/login">Login</Link>

            <Link to="/signup">Sign Up</Link>
          </Menu>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

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
  isAdmin: PropTypes.bool.isRequired
}
