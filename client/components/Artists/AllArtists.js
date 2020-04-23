import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.css';
import {
  fetchAllArtists,
  fetchSavedArtists,
  clearArtistState
} from '../../store';
import { Pagination, Search } from '../';

//component for all artists page
export class AllArtists extends PureComponent {
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

  incrementPage = async () => {
    try {
      await this.props.fetchAllArtists(
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
      await this.props.fetchAllArtists(
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
      await this.props.fetchAllArtists(page, this.state.search);
      this.setState({ currentPage: page });
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };

  searchForArtists = async evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    await this.props.fetchAllArtists(1, name);
    this.setState({ search: name });
  };

  render() {
    return this.props.artists.length === 0 ? null : (
      <div className="allArtistsRoot">
        <h1 className="title">ALL</h1>
        <Search
          onSubmit={this.searchForArtists}
          label={'Search Artists'}
          placeholder={'Name'}
        />
        <div className="allArtistsContainer">
          {this.props.artists.map(artist => (
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
  fetchAllArtists: (page, search) => dispatch(fetchAllArtists(page, search)),
  clearArtistState: () => dispatch(clearArtistState()),
  fetchSaved: () => dispatch(fetchSavedArtists())
});

export default connect(mapState, mapDispatch)(AllArtists);
