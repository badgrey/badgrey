import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../public/styles/index.css';
import { Comments } from '../';
import {
  fetchChosenBlog,
  deleteCurrentBlog,
  fetchSavedArtists,
  fetchComments,
  likeCurrentBlog,
  dislikeCurrentBlog,
  deleteError
} from '../../store';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Blog extends Component {
  state = {
    savedCheck: true
  };

  //loads comments and gets data upon arriving to page if not done already
  async componentDidMount() {
    window.scroll(0, 0);
    const id = +this.props.match.params.id;
    if (this.props.chosenBlog.id !== id) {
      await this.props.fetchChosenBlog(id);
    }
    if (
      this.props.comments.length === 0 ||
      id !== this.props.comments[0].blogId
    ) {
      await this.props.getBlogComments(id);
    }
  }

  //deletes blog
  deleteBlog = async () => {
    await axios.post('/api/deleteBlogPicture', {
      name: this.props.chosenBlog.fileKey
    });
    this.props.delete(
      this.props.chosenBlog.id,
      this.props.chosenBlog.spotlight
    );
    this.props.history.push('/allblogs');
  };

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

  //posts comment
  postComment = event => {
    event.preventDefault();
    let commentInfo = {
      comment: { comment: event.target.comment.value },
      user: this.props.user,
      blog: this.props.chosenBlog
    };
    document.getElementById('form').reset();
    this.props.submitForm(commentInfo);
    this.props.getBlogComments(this.props.chosenBlog.id);
  };

  //makes error message dissapear after some time
  renderErrorMessage = () => {
    setTimeout(() => this.props.renderError(), 3000);
  };

  render() {
    const error = this.props.error.error;
    if (error) {
      this.renderErrorMessage();
    }
    return !this.props.chosenBlog.id ? null : (
      <div className="blogContainer">
        <div className="blogHeader">
          <div className="blogNameHeader">
            {//shows admin buttons if admin
            !this.props.isLoggedIn && !this.props.isAdmin ? null : (
              <div className="blogAdminButtons">
                <Link
                  id="blogEditButton"
                  to={`/editBlog/${this.props.match.params.id}`}
                >
                  <button className="blogEditdelete">Edit Blog</button>
                </Link>
                <button className="blogEditdelete" onClick={this.deleteBlog}>
                  DELETE BLOG
                </button>
              </div>
            )}
            <h1 className="blogTitle">{this.props.chosenBlog.title}</h1>
            <div className="lowerBlogHeader">
              <h3 className="blogAuthor">By {this.props.chosenBlog.author}</h3>
              <div className="blogLikesDislikes">
                <button
                  className="blogLikeDislikeButton"
                  onClick={() =>
                    this.props.likeBlog({
                      blog: this.props.chosenBlog,
                      user: this.props.user
                    })
                  }
                >
                  <img
                    className="blogLikeDislikeImage"
                    src={
                      'https://badgrey-other.s3.us-east-2.amazonaws.com/like.png'
                    }
                  />
                </button>
                <p>{this.props.chosenBlog.BlogLikes.length}</p>
                <button
                  className="blogLikeDislikeButton"
                  onClick={() =>
                    this.props.dislikeBlog({
                      blog: this.props.chosenBlog,
                      user: this.props.user
                    })
                  }
                >
                  <img
                    className="blogLikeDislikeImage"
                    src={
                      'https://badgrey-other.s3.us-east-2.amazonaws.com/dislike.png'
                    }
                  />
                </button>
                <p>{this.props.chosenBlog.BlogDislikes.length}</p>
              </div>
              {error
                ? //throws error if you try to like or dislike blog when not logged in
                  error.error === 'Login To Upvote/Downvote Blog' && (
                    <div className="commentPostError">
                      <p>{error.error}</p>
                    </div>
                  )
                : null}
              <Link
                className="blogToArtistLink"
                to={`/discover/${
                  this.props.chosenBlog.artist.stateAbbrev
                }/${this.props.chosenBlog.artist.name.split(' ').join('') +
                  `_${this.props.chosenBlog.artist.id}`}`}
              >
                <button className="blogToArtistButton">
                  {this.props.chosenBlog.artist.name}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="blogPicDescription">
          <div className="blogBannerDiv">
            <img className="blogBanner" src={this.props.chosenBlog.blogPic} />
          </div>
        </div>
        <div className="blogPost">
          {this.props.chosenBlog.blogPost.split('<>').map(post => {
            return (
              <p key={post.length} className="blogPostText">
                {post}
              </p>
            );
          })}
          <iframe
            className="blogIframe"
            src={this.props.chosenBlog.spotifyURL}
            width="600"
            height="200"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />
        </div>
        <Comments blog={this.props.chosenBlog} />
      </div>
    );
  }
}

const mapState = ({ blogs, user, savedArtists, error, comments }) => ({
  chosenBlog: blogs.chosenBlog,
  isLoggedIn: !!user.id,
  isAdmin: user.isAdmin,
  user,
  savedArtists,
  error,
  comments
});

const mapDispatch = dispatch => ({
  fetchChosenBlog: id => dispatch(fetchChosenBlog(id)),
  fetchSaved: () => dispatch(fetchSavedArtists()),
  delete: (id, spotlight) => dispatch(deleteCurrentBlog(id, spotlight)),
  getBlogComments: id => dispatch(fetchComments(id)),
  likeBlog: blog => dispatch(likeCurrentBlog(blog)),
  dislikeBlog: blog => dispatch(dislikeCurrentBlog(blog)),
  renderError: () => dispatch(deleteError())
});

export default connect(mapState, mapDispatch)(Blog);
