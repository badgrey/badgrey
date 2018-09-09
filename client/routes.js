import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, Discover, State, Artist, SingleGenre, NewArtist, EditArtist, EditUser, SavedArtists, AllUsers, AllArtists} from './components'
import {me, fetchArtists} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn, isAdmin} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Discover} />
        <Route exact path="/discover/all" component={AllArtists} />
        <Route exact path="/discover/genre/:genre" component={SingleGenre} />
        <Route exact path="/discover/:state" component={State} />
        <Route exact path="/discover/:state/:artist" component={Artist} />
        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route exact path="/account" component={EditUser} />
              <Route exact path="/saved" component={SavedArtists} />
            </Switch>
        }
        {
          isAdmin &&
          <Switch>
            <Route exact path="/newArtist" component={NewArtist} />
            <Route exact path="/edit/:artist" component={EditArtist} />
            <Route exact path="/users" component={AllUsers} />
          </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchArtists())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
