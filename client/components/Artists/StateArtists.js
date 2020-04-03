import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.scss';
import { fetchArtists, fetchSavedArtists, fetchBlogs } from '../../store';
import { getStateFullName } from '../../utils/states';
import { sortedArtistsSelector } from '../../store/selectors/artists';

//for indivisula states display of artists that live there
export class StateArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCheck: true,
      search: ''
    };
    this.saved = this.saved.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  //load data if no artists
  componentDidMount() {
    window.scroll(0, 0);
    if (this.props.stateArtists === []) {
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
      this.setState({ savedCheck: false });
    }
  }

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  render() {
    const artists = this.props.stateArtists.filter(artist =>
      artist.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
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
          <h6 className="stateArtistsScrolltoload">Scroll to Load More</h6>
          <div className="stateArtistSearch">
            <form>
              <label className="stateArtistsSearchLabel">Search Artists</label>
              <input onChange={this.handleSearch} placeholder="Name" />
            </form>
          </div>
          <div className="stateArtistsContainer">
            {artists.map(artist => (
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
        </div>
      )
    );
  }
}

const mapState = (state, ownProps) => {
  const { artists, user, savedArtists } = state;
  return {
    stateArtists: artists.filter(artist => {
      return artist.stateAbbrev === ownProps.match.params.state;
    }),
    artists: sortedArtistsSelector(state),
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

export default connect(mapState, mapDispatch)(StateArtists);
