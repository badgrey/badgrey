import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import '../../public/styles/index.scss';
import {
  createNewComment,
  deleteCurrentComment,
  likeCurrentComment,
  dislikeCurrentComment,
  deleteError
} from '../store';
import { sortedCommentsSelector } from '../store/selectors/comments';

class Comments extends PureComponent {
  postComment = async event => {
    event.preventDefault();
    let commentInfo = {
      comment: { comment: event.target.comment.value },
      user: this.props.user
    };
    if (this.props.artist) commentInfo.artist = this.props.artist;
    if (this.props.blog) commentInfo.blog = this.props.blog;
    document.getElementById('commentForm').reset();
    await this.props.submitForm(commentInfo);
    await this.props.getArtistComments(this.props.chosenArtist[0].id);
  };

  renderErrorMessage = () => {
    setTimeout(() => this.props.renderError(), 3000);
  };

  render() {
    const error = this.props.error.error;
    if (error) {
      this.renderErrorMessage();
    }
    return (
      <div className="commentContainer">
        <form
          onSubmit={this.postComment}
          id="commentForm"
          className="commentForm"
        >
          <label>Comment</label>
          <textarea name="comment" type="text" required />
          <button type="submit">Post</button>
          {error
            ? //posts error if trying to comment on artist page and not logged in
              error.error === 'Login To Comment' && (
                <div className="commentPostError">
                  <p>{error.error}</p>
                </div>
              )
            : null}
        </form>
        <div className="commentList">
          {//mapping over all artist comments
          this.props.comments.map(comment => {
            return (
              <div className="singleComment" key={comment.id}>
                <p>{comment.user.username}</p>
                <p>{comment.comment}</p>
                <div className="likesDislikes">
                  <button
                    className="likeDislikeButton"
                    onClick={() =>
                      this.props.likeComment({
                        comment,
                        user: this.props.user
                      })
                    }
                  >
                    <img
                      className="likeDislikeImage"
                      src={
                        'https://badgrey-other.s3.us-east-2.amazonaws.com/like.png'
                      }
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
                      src={
                        'https://badgrey-other.s3.us-east-2.amazonaws.com/dislike.png'
                      }
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
                  {error
                    ? //posts error when trying to like or dislike comment
                      error.error === 'Login To Upvote/Downvote' && (
                        <div className="commentPostError">
                          <p>{error.error}</p>
                        </div>
                      )
                    : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapState = state => {
  const { user, error } = state;
  return {
    comments: sortedCommentsSelector(state),
    user,
    error
  };
};

const mapDispatch = dispatch => ({
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
  renderError() {
    dispatch(deleteError());
  }
});

export default connect(mapState, mapDispatch)(Comments);
