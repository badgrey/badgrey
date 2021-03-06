import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  // Login,
  // Signup,
  Discover,
  StateArtists,
  Artist,
  GenreArtists,
  // NewArtist,
  // EditArtist,
  // EditUser,
  // SavedArtists,
  // AllUsers,
  AllArtists,
  // AllBlogs,
  // Blog,
  Home,
  // EditBlog,
  // NewBlog,
  // OriginalContent,
  // OriginalContentType,
  Contact,
  // AllBricksChapters,
  // BricksChapter
} from './components';
import { me, fetchAllBlogs, fetchFeaturedContent } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  async componentDidMount() {
    await this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Switch>
        {/* Routes placed here are available to all visitors
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        */}
        <Route exact path="/" component={Home} />
        <Route exact path="/RapMap" component={Discover} />
        <Route exact path="/RapMap/all" component={AllArtists} />
        <Route exact path="/RapMap/genre/:genre" component={GenreArtists} />
        <Route exact path="/RapMap/:state" component={StateArtists} />
        <Route exact path="/RapMap/:state/:artist" component={Artist} />
        {/*<Route exact path="/allblogs" component={AllBlogs} />*/}
        {/*<Route exact path="/allblogs/:id" component={Blog} />
        <Route exact path="/originalcontent" component={OriginalContent} />
        <Route
          exact
          path="/originalcontent/:type"
          component={OriginalContentType}
        />
        */}
        <Route exact path="/contact" component={Contact} />
        {/*<Route exact path="/TheBricks" component={AllBricksChapters} />
    <Route exact path="/TheBricks/:name" component={BricksChapter} />*/}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in
            <Route exact path="/account" component={EditUser} />
            <Route exact path="/saved" component={SavedArtists} />
            <Route exact path="/newArtist" component={NewArtist} />
            <Route exact path="/edit/:artist" component={EditArtist} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/newBlog" component={NewBlog} />
            <Route exact path="/editblog/:id" component={EditBlog} />
            */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Home} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = ({ user }) => ({
  // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
  // Otherwise, state.user will be an empty object, and state.user.id will be falsey
  isLoggedIn: !!user.id,
});

const mapDispatch = (dispatch) => ({
  loadInitialData: () => {
    dispatch(me());
    dispatch(fetchAllBlogs());
    dispatch(fetchFeaturedContent());
  },
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
