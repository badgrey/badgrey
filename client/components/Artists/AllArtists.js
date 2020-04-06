import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.scss';
import LazyLoad from 'react-lazyload';
import {
  fetchAllArtists,
  fetchSavedArtists,
  clearArtistState
} from '../../store';
import { Pagination } from '../';

//component for all artists page
export class AllArtists extends Component {
  state = {
    savedCheck: true,
    search: '',
    currentPage: 1
  };

  //load all data if user is visiting this page for the first time
  async componentDidMount() {
    window.scroll(0, 0);
    if (this.props.artists.length === 0) {
      await this.props.fetchAllArtists();
    }
  }

  componentWillUnmount() {
    if (this.state.currentPage !== 1) {
      this.props.fetchAllArtists();
    }
  }
  componentDidUpdate() {
    this.saved();
  }

  //if logged in and no saved and it was already checked, fetch saved artists from db
  saved = () => {
    if (
      this.props.isLoggedIn &&
      this.props.savedArtists.length === 0 &&
      this.state.savedCheck
    ) {
      this.props.fetchSaved();
      this.setState({ savedCheck: false });
    }
  };

  //for search bar at top
  handleSearch = evt => {
    this.setState({
      search: evt.target.value
    });
  };

  incrementPage = async () => {
    try {
      await this.props.fetchAllArtists(this.state.currentPage + 1);
      this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };
  decrementPage = async () => {
    try {
      await this.props.fetchAllArtists(this.state.currentPage - 1);
      this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };

  jumpToPage = async page => {
    try {
      await this.props.fetchAllArtists(page);
      this.setState({ currentPage: page });
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const artists = this.props.artists.filter(artist =>
      artist.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return this.props.artists.length === 0 ? null : (
      <div className="allArtistsRoot">
        <h1 className="title">ALL</h1>
        <h6 className="scrolltoload">Scroll to Load More</h6>
        <div className="artistSearch">
          <form>
            <label className="searchLabel">Search Artists</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <div className="allArtistsContainer">
          {artists.map(artist => (
            //mapping over every artist and returning picture with link to artists page
            <div key={artist.id}>
              <Link
                className="allArtistPic"
                to={`/discover/${artist.stateAbbrev}/${artist.name
                  .split(' ')
                  .join('') + `_${artist.id}`}`}
              >
                <div className="allArtistName">
                  <div className="allArtistNameText">{artist.name}</div>
                </div>
                <LazyLoad height={200}>
                  <img src={artist.imageURL} />
                </LazyLoad>
              </Link>
            </div>
          ))}
        </div>
        {new Array(Math.ceil(this.props.numArtists / 50)).length > 1 && (
          <Pagination
            totalPages={new Array(Math.ceil(this.props.numArtists / 50)).fill(
              null
            )}
            currentPage={this.state.currentPage}
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            jumpToPage={this.jumpToPage}
          />
        )}
      </div>
    );
  }
}

//putting all artists in alphabetical order and user and saved artists on props
const mapState = ({ artists, user, savedArtists }) => {
  return {
    artists: artists.allArtists,
    numArtists: artists.numArtists,
    isLoggedIn: !!user.id,
    user,
    savedArtists
  };
};

//putting loadinitiail data and fetchsaved on props
const mapDispatch = dispatch => ({
  fetchAllArtists: page => dispatch(fetchAllArtists(page)),
  clearArtistState: () => dispatch(clearArtistState()),
  fetchSaved: () => dispatch(fetchSavedArtists())
});

export default connect(mapState, mapDispatch)(AllArtists);
