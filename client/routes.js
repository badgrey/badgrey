import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, Discover, State, Artist, SingleGenre, NewArtist, EditArtist, EditUser, SavedArtists, AllUsers, AllArtists, AllBlogs, Blog, EditBlog, NewBlog, AllInterviews, Interview, NewInterview, OriginalContent, Submit} from './components'
import {me, fetchArtists, fetchBlogs, fetchInterviews, fetchOriginalContent} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props
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
        <Route exact path="/allblogs" component={AllBlogs} />
        <Route exact path="/allblogs/:id" component={Blog} />
        <Route exact path ="/interviews" component={AllInterviews} />
        <Route exact path ="/interviews/:interview" component={Interview} />
        <Route exact path ="/originalcontent" component={OriginalContent} />
        <Route exact path ="/submit" component={Submit} />
        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route exact path="/account" component={EditUser} />
              <Route exact path="/saved" component={SavedArtists} />
              <Route exact path="/newArtist" component={NewArtist} />
              <Route exact path="/edit/:artist" component={EditArtist} />
              <Route exact path="/users" component={AllUsers} />
              <Route exact path="/newBlog" component={NewBlog} />
              <Route exact path="/editblog/:id" component={EditBlog} />
              <Route exact path="/newInterview" component={NewInterview} />
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Discover} />
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
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchArtists())
      dispatch(fetchBlogs())
      dispatch(fetchInterviews())
      dispatch(fetchOriginalContent())
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
