import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import '../../public/styles/index.scss';

class Navbar extends Component {
  state = {
    clicked: false,
  };

  renderDropDown = (evt) => {
    evt.preventDefault();
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  };

  render() {
    return (
      <>
        <Link to="/" className="navLogoLink">
          <img
            className="navTextLogo"
            src="https://badgrey-other.s3.us-east-2.amazonaws.com/badGreyBlackTextLogo.png"
          />
        </Link>
        <div className="navMenuContainer" onClick={this.renderDropDown}>
          <img
            className="barmenuPic"
            src={'https://badgrey-other.s3.us-east-2.amazonaws.com/barmenu.png'}
          />
        </div>
        <nav className="navLinksContainer">
          <div className="navLinks">
            {this.state.clicked && (
              <div className="navOptions">
                <div className="singleNavOption">
                  <Link to="/RapMap">Rap Map</Link>
                </div>

                {!this.props.isLoggedIn && (
                  <div className="singleNavOption">
                    <a href="https://www.badgrey.shop/">Shop</a>
                  </div>
                )}
                <div className="singleNavOption">
                  <Link to="/contact">Contact Us</Link>
                </div>
                {/*
                    {this.props.isAdmin && (
                      <div className="singleNavOption">
                        <Link to="/newArtist">Add Artist</Link>
                      </div>
                    )}
                    {this.props.isAdmin && (
                      <div className="singleNavOption">
                        <Link to="/users">Users</Link>
                      </div>
                    )}
                    {this.props.isLoggedIn && (
                      <div className="singleNavOption">
                        <Link to="/saved">Saved</Link>
                      </div>
                    )}
                    {this.props.isLoggedIn && (
                      <div className="singleNavOption">
                        <Link to="/account">Account</Link>
                      </div>
                    )}
                    {this.props.isLoggedIn && (
                      <div className="singleNavOption">
                        <a href="#" onClick={this.props.handleClick}>
                          Logout
                        </a>
                      </div>
                    )}
                    */}
              </div>
            )}
          </div>
        </nav>
      </>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = ({ user }) => {
  return {
    isLoggedIn: !!user.id,
    isAdmin: user.isAdmin,
  };
};

const mapDispatch = (dispatch) => ({
  handleClick: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  // handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
