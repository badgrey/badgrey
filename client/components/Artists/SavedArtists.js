import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.scss';
import {
  fetchArtists,
  fetchSavedArtists,
  deleteCurrentSavedArtist,
  fetchBlogs
} from '../../store';
import { sortedArtistsSelector } from '../../store/selectors/artists';

//component for showing saved artists in specific users saved component
export class SavedArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCheck: true,
      search: ''
    };
    this.deleteSaved = this.deleteSaved.bind(this);
    this.saved = this.saved.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  //remove from saved
  deleteSaved() {
    this.props.delete();
  }

  //loads info
  componentDidMount() {
    window.scroll(0, 0);
    if (this.props.artists === []) {
      this.props.loadInitialData();
    }
    this.saved();
  }

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

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  render() {
    const artists = this.props.savedArtists.filter(artist =>
      artist.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return (
      //if there are no saved artists after loading data display message saying no saved artists
      this.props.savedArtists.length === 0 ? (
        <div className="noSavedContainer">
          <div className="noSaved">
            <h2>You Don't Have Any Saved Artists!</h2>
            <h5>
              If you add some they will show up here so you can check them out
              later
            </h5>
          </div>
        </div>
      ) : (
        <div className="savedArtistsDiv">
          <h1 className="savedArtistsTitle">SAVED</h1>
          <div className="savedArtistsSearch">
            <form>
              <label className="savedArtistsSearchLabel">Search Artists</label>
              <input onChange={this.handleSearch} placeholder="Name" />
            </form>
          </div>
          <div className="savedArtistsContainer">
            {//map over saved artists and display them like everything else
            artists.map(artist => (
              <div key={artist.id} className="savedArtists">
                <Link
                  className="savedArtistPic"
                  to={`/discover/${artist.stateAbbrev}/${artist.name
                    .split(' ')
                    .join('') + `_${artist.id}`}`}
                >
                  <div className="savedArtistName">
                    <div className="savedArtistNameText">{artist.name}</div>
                  </div>
                  <img src={artist.imageURL} />
                </Link>
                <button
                  className="savedArtistsButton"
                  onClick={() => {
                    this.props.delete(artist.id);
                    this.props.history.push('/saved');
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    );
  }
}

const mapState = state => {
  const { user, savedArtists } = state;
  return {
    savedArtists,
    artists: sortedArtistsSelector(state),
    isLoggedIn: !!user,
    user
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchArtists());
      dispatch(fetchBlogs());
    },
    fetchSaved() {
      dispatch(fetchSavedArtists());
    },
    delete(id) {
      dispatch(deleteCurrentSavedArtist(id));
    }
  };
};

export default connect(mapState, mapDispatch)(SavedArtists);
