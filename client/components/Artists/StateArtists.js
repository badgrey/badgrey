import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.scss';
import {
  fetchStateArtists,
  fetchSavedArtists,
  clearArtistState
} from '../../store';
import { getStateFullName } from '../../utils/states';
import { Pagination, Search } from '../';

//for indivisula states display of artists that live there
export class StateArtists extends Component {
  state = {
    savedCheck: true,
    search: '',
    currentPage: 1
  };
  //load data if no artists
  async componentDidMount() {
    window.scroll(0, 0);
    const currentState = this.props.match.params.state;
    if (
      this.props.stateArtists.length === 0 ||
      this.props.stateArtists[0].stateAbbrev !== currentState
    ) {
      await this.props.fetchStateArtists(currentState);
    }
  }

  componentWillUnmount() {
    if (this.state.currentPage !== 1) {
      this.props.fetchStateArtists(this.props.match.params.state);
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
      this.setState({ savedCheck: false });
    }
  };

  incrementPage = async () => {
    try {
      await this.props.fetchStateArtists(
        this.props.match.params.state,
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
      await this.props.fetchStateArtists(
        this.props.match.params.state,
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
      await this.props.fetchStateArtists(
        this.props.match.params.state,
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
    await this.props.fetchStateArtists(this.props.match.params.state, 1, name);
    this.setState({ search: name });
  };

  render() {
    return (
      //if there are no artists in this state load informative message
      this.props.stateArtists.length === 0 ? (
        <div className="noStateArtistsContainer">
          <div className="noStateArtists">
            <h1>Searching...</h1>
          </div>
        </div>
      ) : (
        <div className="stateArtistsDiv">
          <h1 className="stateArtistsTitle">
            {getStateFullName(
              this.props.stateArtists[0].stateAbbrev
            ).toUpperCase()}
          </h1>
          <Search
            onSubmit={this.searchForArtists}
            label={'Search Artists'}
            placeholder={'Name'}
          />
          <div className="stateArtistsContainer">
            {this.props.stateArtists.map(artist => (
              //map over artists and display link for their individual page
              <div key={artist.id}>
                <Link
                  className="stateArtistPic"
                  to={`/discover/${artist.stateAbbrev}/${artist.name
                    .split(' ')
                    .join('') + `_${artist.id}`}`}
                >
                  <div className="stateArtistName">
                    <div className="stateArtistNameText">{artist.name}</div>
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
      )
    );
  }
}

const mapState = ({ artists, user, savedArtists }) => ({
  stateArtists: artists.stateArtists,
  numArtists: artists.numStateArtists,
  isLoggedIn: !!user.id,
  user,
  savedArtists
});

const mapDispatch = dispatch => ({
  fetchStateArtists: (state, page, search) =>
    dispatch(fetchStateArtists(state, page, search)),
  fetchSaved: () => dispatch(fetchSavedArtists()),
  clearArtistState: () => dispatch(clearArtistState())
});

export default connect(mapState, mapDispatch)(StateArtists);
