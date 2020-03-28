import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../public/styles/index.scss';
import { fetchArtists, fetchSavedArtists, fetchBlogs } from '../store';

//component for artists under single genre
export class SingleGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCheck: true,
      search: ''
    };
    this.saved = this.saved.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  //if no genre artists fetch data
  componentDidMount() {
    window.scroll(0, 0);
    if (this.props.genreArtists === []) {
      this.props.loadInitialData();
    }
  }

  componentDidUpdate() {
    this.saved();
  }

  saved() {
    if (
      this.props.isLoggedIn &&
      this.props.savedArtists.length === 0 &&
      this.state.savedCheck
    ) {
      this.props.fetchSaved();
    }
    if (this.state.savedCheck === true) {
      this.setState({ savedCheck: false });
    }
  }

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  render() {
    const artists = this.props.genreArtists.filter(artist =>
      artist.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return this.props.genreArtists.length === 0 ? null : (
      <div className="genreArtistsDiv">
        <h1 className="genreArtistsTitle">
          {this.props.genreArtists[0].genre}
        </h1>
        <h6 className="genreArtistsScrolltoload">Scroll to Load More</h6>
        <div className="genreArtistsSearch">
          <form>
            <label className="genreArtistsSearchLabel">Search Artists</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <div className="genreArtistsContainer">
          {artists.map(artist => (
            //map over all artists that belong to chosen genre
            <div key={artist.id}>
              <Link
                className="genreArtistPic"
                to={`/discover/${artist.stateAbbrev}/${artist.name
                  .split(' ')
                  .join('') + `_${artist.id}`}`}
              >
                <div className="genreArtistName">
                  <div className="genreArtistNameText">{artist.name}</div>
                </div>
                <img src={artist.imageURL} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//matches artists with route
const mapState = ({ artists, user, savedArtists }, ownProps) => {
  return {
    genreArtists: artists.filter(artist => {
      return artist.genre.split(' / ').join('') === ownProps.match.params.genre;
    }),
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

export default connect(mapState, mapDispatch)(SingleGenre);
