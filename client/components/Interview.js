import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../../public/style.css'
import {
  fetchArtists,
  fetchSavedArtists,
  fetchBlogs,
  fetchInterviews,
  fetchInterviewComments,
  createNewComment,
  deleteCurrentComment,
  likeCurrentComment,
  dislikeCurrentComment,
  likeCurrentInterview,
  dislikeCurrentInterview,
  deleteCurrentInterview
} from '../store';

export class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCheck: true
    };
    this.saved = this.saved.bind(this);
    this.postComment = this.postComment.bind(this);
    this.deleteInterview = this.deleteInterview.bind(this);
  }

  componentDidMount() {
    if (this.props.artists === []) {
      this.props.loadInitialData();
    }
    const id = parseInt(this.props.match.params.interview.split('_')[1]);
    this.props.getArtistComments(id);
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

  postComment(event) {
    event.preventDefault();
    let commentInfo = {
      comment: { comment: event.target.comment.value },
      user: this.props.user,
      interview: this.props.chosenInterview[0]
    };
    document.getElementById('form').reset();
    this.props.submitForm(commentInfo);
    this.props.getInterviewComments(this.props.chosenInterview[0].id);
  }

  deleteInterview() {
    this.props.delete(this.props.chosenInterview[0].id);
    this.props.history.push(`/interviews`);
  }

  render() {
    return !this.props.chosenInterview[0] ? null : (
      <div>
        <div className="interviewHeader">
          <h1>{this.props.chosenInterview[0].artist.name}</h1>
          <p>{this.props.chosenInterview[0].description}</p>
          {!this.props.isLoggedIn && !this.props.isAdmin ? null : (
            <div className="adminButtons">
              <button className="editdelete" onClick={this.deleteInterview}>
                DELETE Interview
              </button>
            </div>
          )}
        </div>
        <div className="interviewLikesDislikes">
          <button
            className="likeDislikeButton"
            onClick={() =>
              this.props.likeInterview({
                interview: this.props.chosenInterview[0],
                user: this.props.user
              })
            }
          >
            <img
              className="likeDislikeImage"
              src={require('../../public/images/like.png')}
            />
          </button>
          <p>{this.props.chosenInterview[0].InterviewLikes.length}</p>
          <button
            className="likeDislikeButton"
            onClick={() =>
              this.props.dislikeInterview({
                interview: this.props.chosenInterview[0],
                user: this.props.user
              })
            }
          >
            <img
              className="likeDislikeImage"
              src={require('../../public/images/dislike.png')}
            />
          </button>
          <p>{this.props.chosenInterview[0].InterviewDislikes.length}</p>
        </div>
        <div className="interviewContainer">
          <div className="interviewSoundcloud">
            <iframe
              width="1000"
              height="100"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
              src={this.props.chosenInterview[0].soundcloud}
            />
          </div>
          <div className="interviewContent">
            <img
              className="interviewContentPic"
              src={require(`../../public/images/interviews/${
                this.props.chosenInterview[0].interview
              }.jpg`)}
            />
          </div>
        </div>
        <div className="artistCommentContainer">
          <form onSubmit={this.postComment} id="form" className="commentForm">
            <label>Comment Here</label>
            <input name="comment" type="text" required />
            <button type="submit">Post</button>
          </form>
          {this.props.comments.map(comment => {
            return (
              <div className="singleComment" key={comment.id}>
                <p className="commentUser">{comment.user.username}</p>
                <p>{comment.comment}</p>
                <div className="likesDislikes">
                  <button
                    className="likeDislikeButton"
                    onClick={() =>
                      this.props.likeComment({ comment, user: this.props.user })
                    }
                  >
                    <img
                      className="likeDislikeImage"
                      src={require('../../public/images/like.png')}
                    />
                  </button>
                  <p>{comment.Likes.length}</p>
                  <button
                    className="likeDislikeButton"
                    onClick={() =>
                      this.props.dislikeComment({
                        comment,
                        user: this.props.user
                      })
                    }
                  >
                    <img
                      className="likeDislikeImage"
                      src={require('../../public/images/dislike.png')}
                    />
                  </button>
                  <p>{comment.Dislikes.length}</p>
                  {this.props.user.id !== comment.user.id ? null : (
                    <div>
                      <button
                        className="deleteCommentButton"
                        onClick={() => this.props.deleteComment(comment.id)}
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (
  { artists, blogs, user, savedArtists, interviews, comments },
  ownProps
) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1;
      if (artistA.name > artistB.name) return 1;
      return 0;
    }),
    isLoggedIn: !!user.id,
    isAdmin: user.isAdmin,
    user,
    savedArtists,
    blogs,
    interviews,
    comments: comments.sort((commentA, commentB) => {
      if (commentA.Likes.length < commentB.Likes.length) return 1;
      if (commentA.Likes.length > commentB.Likes.length) return -1;
      return 0;
    }),
    chosenInterview: interviews.filter(interview => {
      return (
        interview.interview === ownProps.match.params.interview.split('_')[0]
      );
    })
  };
};
const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchArtists());
      dispatch(fetchBlogs());
      dispatch(fetchInterviews());
    },
    fetchSaved() {
      dispatch(fetchSavedArtists());
    },
    getArtistComments(id) {
      dispatch(fetchInterviewComments(id));
    },
    deleteComment(id) {
      dispatch(deleteCurrentComment(id));
    },
    likeComment(comment) {
      dispatch(likeCurrentComment(comment));
    },
    dislikeComment(comment) {
      dispatch(dislikeCurrentComment(comment));
    },
    submitForm(comment) {
      dispatch(createNewComment(comment));
    },
    likeInterview(interview) {
      dispatch(likeCurrentInterview(interview));
    },
    dislikeInterview(interview) {
      dispatch(dislikeCurrentInterview(interview));
    },
    delete(id) {
      dispatch(deleteCurrentInterview(id));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Interview);
