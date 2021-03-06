import React, { Component } from 'react';
import { connect } from 'react-redux';
import { YoutubePlayer } from '../index';
import {
  fetchMusicVideos,
  fetchCitySounds,
  createNewOriginalContent,
  deleteCurrentOriginalContent,
  likeCurrentOriginalContent,
  dislikeCurrentOriginalContent
} from '../../store';
import '../../../public/styles/index.scss';

export class OriginalContentType extends Component {
  async componentDidMount() {
    const type = this.props.match.params.type;
    if (this.props[type].length === 0) {
      if (type === 'MusicVideo') await this.props.fetchMusicVideos();
      else await this.props.fetchCitySounds();
    }
  }

  submit = async event => {
    event.preventDefault();
    let info = {
      youtubeId: event.target.oc.value,
      contentType:
        this.props.match.params.type === 'MusicVideo'
          ? 'MusicVideo'
          : 'CitySounds'
    };
    await this.props.submitContent(info);
  };

  render() {
    return !this.props[this.props.match.params.type].length &&
      this.props.isAdmin ? (
      <div className="OCcontainerDiv">
        <div className="OCheader">
          <h1>Bad Grey Films</h1>
          <form className="newOC" onSubmit={this.submit}>
            <label>Add Original Content</label>
            <input name="oc" type="text" required placeholder="Youtube ID" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    ) : (
      <div className="OCcontainerDiv">
        <div className="OCheader">
          <h1>
            {this.props.match.params.type === 'MusicVideo'
              ? 'MUSIC VIDEOS'
              : 'CITY SOUNDS'}
          </h1>
          {this.props.isAdmin ? (
            <form className="newOC" onSubmit={this.submit}>
              <label>Add Original Content</label>
              <input name="oc" type="text" required placeholder="Youtube ID" />
              <button type="submit">Submit</button>
            </form>
          ) : null}
        </div>
        <div className="OCcontainer">
          {//maps over all youtube ids and displays original content
          this.props[this.props.match.params.type].map(oc => {
            return (
              <div key={oc.id} className="singleoc">
                <YoutubePlayer ytID={oc.youtubeId} />
                <div className="ocLikesDislikes">
                  <button
                    className="ocLikeDislikeButton"
                    onClick={() =>
                      this.props.likeOC({ oc, user: this.props.user })
                    }
                  >
                    <img
                      className="ocLikeDislikeImage"
                      src={
                        'https://badgrey-other.s3.us-east-2.amazonaws.com/like.png'
                      }
                    />
                  </button>
                  <p>{oc.OriginalContentLikes.length}</p>
                  <button
                    className="ocLikeDislikeButton"
                    onClick={() =>
                      this.props.dislikeOC({ oc, user: this.props.user })
                    }
                  >
                    <img
                      className="ocLikeDislikeImage"
                      src={
                        'https://badgrey-other.s3.us-east-2.amazonaws.com/dislike.png'
                      }
                    />
                  </button>
                  <p>{oc.OriginalContentDislikes.length}</p>
                </div>
                {!this.props.isAdmin ? null : (
                  <button
                    className="ocSavedArtistsButton"
                    onClick={() => {
                      this.props.delete(oc.id);
                    }}
                  >
                    X
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="ocViewMoreButton">
          <button
            className="allArtistsButton"
            onClick={() =>
              window.open(
                'https://www.youtube.com/channel/UCcGcK4KeoexHv2A4cf54LOQ/featured',
                '_blank'
              )
            }
          >
            View More
          </button>
        </div>
      </div>
    );
  }
}

const mapState = ({ originalcontent, user }) => {
  return {
    MusicVideo: originalcontent.musicVideos,
    CitySounds: originalcontent.citySounds,
    user,
    isAdmin: user.isAdmin
  };
};

const mapDispatch = () => dispatch => ({
  fetchMusicVideos: () => dispatch(fetchMusicVideos()),
  fetchCitySounds: () => dispatch(fetchCitySounds()),
  submitContent: oc => dispatch(createNewOriginalContent(oc)),
  delete: id => dispatch(deleteCurrentOriginalContent(id)),
  likeOC: oc => dispatch(likeCurrentOriginalContent(oc)),
  dislikeOC: oc => dispatch(dislikeCurrentOriginalContent(oc))
});

export default connect(mapState, mapDispatch)(OriginalContentType);
