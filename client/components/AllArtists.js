import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../public/style.scss';
import LazyLoad from 'react-lazyload';
import { fetchArtists, fetchSavedArtists, fetchBlogs } from '../store';

//component for all artists page
export class AllArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCheck: true,
      search: ''
    };
    this.saved = this.saved.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  //load all data if user is visiting this page for the first time
  componentDidMount() {
    window.scroll(0, 0);
    if (this.props.artists === []) {
      this.props.loadInitialData();
    }
  }

  componentDidUpdate() {
    this.saved();
  }

  //if logged in and no saved and it was already checked, fetch saved artists from db
  saved() {
    if (
      this.props.isLoggedIn &&
      this.props.savedArtists.length === 0 &&
      this.state.savedCheck
    ) {
      this.props.fetchSaved();
      this.setState({ savedCheck: false });
    }
  }

  //for search bar at top
  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  render() {
    const artists = this.props.artists.filter(artist =>
      artist.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return this.props.artists.length === 0 ? null : (
      <div className="artistsDiv">
        <h1 className="title">ALL</h1>
        <h6 className="scrolltoload">Scroll to Load More</h6>
        <div className="artistSearch">
          <form>
            <label className="searchLabel">Search Artists</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <div className="state">
          {artists.map(artist => (
            //mapping over every artist and returning picture with link to artists page
            <div key={artist.id}>
              <Link
                className="artistPic"
                to={`/discover/${artist.stateAbbrev}/${artist.name
                  .split(' ')
                  .join('') + `_${artist.id}`}`}
              >
                <div className="artistName">
                  <div className="artistNameText">{artist.name}</div>
                </div>
                <LazyLoad height={200}>
                  <img src={artist.imageURL} />
                </LazyLoad>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//putting all artists in alphabetical order and user and saved artists on props
const mapState = ({ artists, user, savedArtists }) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1;
      if (artistA.name > artistB.name) return 1;
      return 0;
    }),
    isLoggedIn: !!user.id,
    user,
    savedArtists
  };
};

//putting loadinitiail data and fetchsaved on props
const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchArtists());
      dispatch(fetchBlogs());
    },
    fetchSaved() {
      dispatch(fetchSavedArtists());
    }
  };
};

export default connect(mapState, mapDispatch)(AllArtists);
