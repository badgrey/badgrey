import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import '../../public/style.css'
//import {Header} from 'semantic-ui-react'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="navbar">
    <h1 className="badgrey">Bad Grey</h1>
    <nav>
      {isLoggedIn ? (
        <div className="navLinks">
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/discover">Discover</Link>
          </div>
          <div>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        </div>
      ) : (
        <div className="navLinks">
            {/* The navbar will show these links before you log in */}
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/discover">Discover</Link>
          </div>
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
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
    isLoggedIn: !!state.user.id
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
  isLoggedIn: PropTypes.bool.isRequired
}
