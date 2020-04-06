import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.scss';
import { fetchGenreArtists, fetchSavedArtists } from '../../store';
import { Pagination, Search } from '../';
//component for artists under single genre
export class GenreArtists extends Component {
  state = {
    savedCheck: true,
    search: '',
    currentPage: 1
  };

  //if no genre artists fetch data
  async componentDidMount() {
    window.scroll(0, 0);
    let currentGenre = this.props.match.params.genre;
    if (
      this.props.genreArtists.length === 0 ||
      this.props.genreArtists[0].genre !== currentGenre
    ) {
      await this.props.fetchGenreArtists(currentGenre);
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

  saved = () => {
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
  };

  incrementPage = async () => {
    try {
      await this.props.fetchGenreArtists(
        this.props.match.params.genre,
        this.state.currentPage + 1,
        this.state.search
      );
      this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };
  decrementPage = async () => {
    try {
      await this.props.fetchGenreArtists(
        this.props.match.params.genre,
        this.state.currentPage - 1,
        this.state.search
      );
      this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };

  jumpToPage = async page => {
    try {
      await this.props.fetchGenreArtists(
        this.props.match.params.genre,
        page,
        this.state.search
      );
      this.setState({ currentPage: page });
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };

  searchForArtists = async evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    await this.props.fetchGenreArtists(this.props.match.params.genre, 1, name);
    this.setState({ search: name });
  };

  render() {
    return this.props.genreArtists.length === 0 ? null : (
      <div className="genreArtistsDiv">
        <h1 className="genreArtistsTitle">
          {this.props.genreArtists[0].genre}
        </h1>
        <Search
          onSubmit={this.searchForArtists}
          label={'Search Artists'}
          placeholder={'Name'}
        />
        <div className="genreArtistsContainer">
          {this.props.genreArtists.map(artist => (
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

//matches artists with route
const mapState = ({ artists, user, savedArtists }) => {
  return {
    genreArtists: artists.genreArtists,
    numArtists: artists.numGenreArtists,
    isLoggedIn: !!user.id,
    user,
    savedArtists
  };
};

const mapDispatch = dispatch => ({
  fetchGenreArtists: (genre, page, search) =>
    dispatch(fetchGenreArtists(genre, page, search)),
  fetchSaved: () => dispatch(fetchSavedArtists())
});

export default connect(mapState, mapDispatch)(GenreArtists);
