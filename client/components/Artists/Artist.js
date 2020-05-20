import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../public/styles/index.scss';
import { YoutubePlayer, Comments } from '../';
import {
  fetchChosenArtist,
  deleteCurrentArtist,
  fetchSavedArtists,
  addNewSavedArtist,
  fetchArtistComments,
  likeCurrentArtist,
  dislikeCurrentArtist,
  deleteError,
  fetchStateArtists,
} from '../../store';
import { Link } from 'react-router-dom';
import axios from 'axios';

//individual artist page component
export class Artist extends Component {
  state = {
    savedCheck: true,
  };

  //getting initial data and comments for specific user when getting to page
  async componentDidMount() {
    const artistId = +this.props.match.params.artist.split('_')[1];
    window.scroll(0, 0);
    if (this.props.chosenArtist.id !== artistId) {
      await this.props.fetchChosenArtist(artistId);
    }
    await this.props.getArtistComments(artistId);
  }

  componentDidUpdate() {
    this.saved();
  }

  //deletes artist
  deleteArtist = async () => {
    await axios.post('/api/deleteArtistPicture', {
      name: this.props.chosenArtist.fileKey,
    });
    const state = this.props.chosenArtist.stateAbbrev;
    await this.props.delete(this.props.chosenArtist.id);
    await this.props.fetchStateArtists(1, state);
    this.props.history.push(`/RapMap/${state}`);
  };

  saved = async () => {
    if (
      this.props.isLoggedIn &&
      this.props.savedArtists.length === 0 &&
      this.state.savedCheck
    ) {
      await this.props.fetchSaved();
      this.setState({ savedCheck: false });
    }
  };

  //saves artist to users saved page
  saveArtist = async () => {
    await this.props.saveCurrentArtist({
      id: this.props.chosenArtist.id,
      user: this.props.user,
    });
  };

  //gets rid of error message after a little
  renderErrorMessage() {
    setTimeout(() => this.props.renderError(), 3000);
  }

  render() {
    const error = this.props.error.error;
    if (error) {
      this.renderErrorMessage();
    }
    return !this.props.chosenArtist.id ? null : (
      <div className="artistRoot">
        <div className="artistHeader">
          <Link
            className="artistStateLink"
            to={`/RapMap/${this.props.chosenArtist.stateAbbrev}`}
          >
            <img
              className="artistStateImage"
              src={`https://badgrey-states.s3.us-east-2.amazonaws.com/${this.props.chosenArtist.stateAbbrev}.png`}
            />
          </Link>
          <div className="artistNameHeader">
            <h1 className="artistTitle">{this.props.chosenArtist.name}</h1>
            <h3 className="artistCity">{this.props.chosenArtist.city}</h3>
            {
              //depending if artist is saved or not will display a button to save them or just "saved"
              this.props.isSaved ? (
                <div>Saved</div>
              ) : (
                <button className="artistSaveButton" onClick={this.saveArtist}>
                  + Save +
                </button>
              )
            }
            {error
              ? //displays error if trying to save artist when not logged in
                error.error === 'Login To Save Artist' && (
                  <div className="commentPostError">
                    <p>{error.error}</p>
                  </div>
                )
              : null}
            <div className="artistLikesDislikes">
              <button
                className="artistLikeDislikeButton"
                onClick={() =>
                  this.props.likeArtist({
                    artist: this.props.chosenArtist,
                    user: this.props.user,
                  })
                }
              >
                <img
                  className="artistLikeDislikeImage"
                  src={
                    'https://badgrey-other.s3.us-east-2.amazonaws.com/like.png'
                  }
                />
              </button>
              <p>{this.props.chosenArtist.ArtistLikes.length}</p>
              <button
                className="artistLikeDislikeButton"
                onClick={() =>
                  this.props.dislikeArtist({
                    artist: this.props.chosenArtist,
                    user: this.props.user,
                  })
                }
              >
                <img
                  className="artistLikeDislikeImage"
                  src={
                    'https://badgrey-other.s3.us-east-2.amazonaws.com/dislike.png'
                  }
                />
              </button>
              <p>{this.props.chosenArtist.ArtistDislikes.length}</p>
            </div>
            {error
              ? //puts forward error if trying to like or dislike artist when not logged in
                error.error === 'Login To Upvote/Downvote Artist' && (
                  <div className="commentPostError">
                    <p>{error.error}</p>
                  </div>
                )
              : null}
            {
              //displays admin buttons for edit or delete if admin
              !this.props.isLoggedIn && !this.props.isAdmin ? null : (
                <div className="artistAdminButtons">
                  <Link
                    className="artistEditLink"
                    to={`/edit/${this.props.match.params.artist}`}
                  >
                    <button className="artistEditdelete">
                      Edit Artist Info
                    </button>
                  </Link>
                  <button
                    className="artistEditdelete"
                    onClick={this.deleteArtist}
                  >
                    DELETE ARTIST
                  </button>
                </div>
              )
            }
          </div>
          <Link
            to={`/RapMap/genre/${this.props.chosenArtist.genre}`}
            className="artistGenreLink"
          >
            <div>More {this.props.chosenArtist.genre} Artists</div>
          </Link>
        </div>
        {/*this.props.chosenArtist.blogs.length === 0 ? null : (
          <div className="artistRelatedBlogsContainer">
            {this.props.chosenArtist.blogs.slice(-3).map(blog => {
              return (
                <div key={blog.id} className="artistSingleRelatedBlog">
                  <div className="artistRelatedBlogPic">
                    <img src={blog.blogPic} />
                  </div>
                  <div className="artistSingleRelatedBlogInfo">
                    <h6>{blog.title}</h6>
                    <Link to={`/allblogs/${blog.id}`}>
                      <button className="artistRelatedBlogButton">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          )*/}
        <div className="artistSoundcloudAndYoutube">
          <div className="artistSoundcloud">
            <iframe
              width="500"
              height="500"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
              src={this.props.chosenArtist.soundcloudURL}
            />
          </div>
          <div className="artistYoutube">
            {
              //maps through youtube ids and puts up youtube video for each artist
              this.props.chosenArtist.youtubeID.map((id) => {
                return <YoutubePlayer key={id} ytID={id} />;
              })
            }
          </div>
        </div>
        <Comments artist={this.props.chosenArtist} />
      </div>
    );
  }
}

//putting artists comments chosen artist savedartists error and is saved on props
const mapState = ({ artists, user, savedArtists, error }) => ({
  chosenArtist: artists.chosenArtist,
  isLoggedIn: !!user.id,
  isAdmin: user.isAdmin,
  user,
  error,
  savedArtists,
  isSaved:
    savedArtists.filter((artist) => {
      return artist.id === artists.chosenArtist.id;
    }).length !== 0,
});

//buncha stuff over here on props too
const mapDispatch = (dispatch) => ({
  fetchChosenArtist: (id) => dispatch(fetchChosenArtist(id)),
  fetchStateArtists: (page, state) => dispatch(fetchStateArtists(page, state)),
  delete: (id) => dispatch(deleteCurrentArtist(id)),
  fetchSaved: () => dispatch(fetchSavedArtists()),
  saveCurrentArtist: (id) => dispatch(addNewSavedArtist(id)),
  getArtistComments: (id) => dispatch(fetchArtistComments(id)),
  likeArtist: (artist) => dispatch(likeCurrentArtist(artist)),
  dislikeArtist: (artist) => dispatch(dislikeCurrentArtist(artist)),
  renderError: () => dispatch(deleteError()),
});

export default connect(mapState, mapDispatch)(Artist);
