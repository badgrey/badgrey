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

//component for single interview
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

  //loads data and specific interview comments
  componentDidMount() {
    window.scroll(0, 0)
    if (this.props.artists === []) {
      this.props.loadInitialData();
    }
    const id = parseInt(this.props.match.params.interview);
    this.props.getInterviewComments(id);
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

  //allows comment to be posted
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

  //delete interview
  deleteInterview() {
    this.props.delete(this.props.chosenInterview[0].id);
    this.props.history.push(`/interviews`);
  }

  render() {
    return !this.props.chosenInterview[0] ? null : (
      <div className="singleInterviewContainer">
        <div className="interviewHeader">
          <h1>{this.props.chosenInterview[0].artist.name}</h1>
          <p>{this.props.chosenInterview[0].description}</p>
          {
            //show admin buttons if admin
            !this.props.isLoggedIn && !this.props.isAdmin ? null : (
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
        </div>
        <div className="interviewContent">
            {
              this.props.chosenInterview[0].interview.map((content, index) => {
                if (index % 2 === 0) {
                  return (
                    <div key={content.id} className="interviewQuestion">
                      <img src={require('../../public/images/interviews/interviewWolfLogo.png')} />
                      <p className="interviewQuestionText">{content}</p>
                    </div>
                  )
                } else {
                  return (
                    <p key={content.id} className="interviewAnswer">{content}</p>
                  )
                }
              })
            }
        </div>
        <div className="interviewCommentContainer">
          <form onSubmit={this.postComment} id="form" className="commentForm">
            <label>Comment Here</label>
            <textarea name="comment" type="text" required />
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
        interview.id === parseInt(ownProps.match.params.interview)
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
    getInterviewComments(id) {
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
