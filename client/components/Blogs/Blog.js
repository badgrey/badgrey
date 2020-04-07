import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../public/styles/index.scss';
import { Comments } from '../';
import {
  fetchBlogs,
  deleteCurrentBlog,
  fetchAllArtists,
  fetchSavedArtists,
  fetchComments,
  likeCurrentBlog,
  dislikeCurrentBlog,
  deleteError
} from '../../store';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { sortedArtistsSelector } from '../../store/selectors/artists';

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCheck: true
    };
    this.saved = this.saved.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  //loads comments and gets data upon arriving to page if not done already
  componentDidMount() {
    window.scroll(0, 0);
    const id = parseInt(this.props.match.params.id);
    if (this.props.artists === []) {
      this.props.loadInitialData();
    }
    if (
      this.props.comments.length === 0 ||
      id !== this.props.comments[0].blogId
    ) {
      this.props.getBlogComments(id);
    }
  }

  //deletes blog
  async deleteBlog() {
    await axios.post('/api/deleteBlogPicture', {
      name: this.props.chosenBlog[0].fileKey
    });
    this.props.delete(
      this.props.chosenBlog[0].id,
      this.props.chosenBlog[0].spotlight
    );
    this.props.history.push('/allblogs');
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

  //posts comment
  postComment(event) {
    event.preventDefault();
    let commentInfo = {
      comment: { comment: event.target.comment.value },
      user: this.props.user,
      blog: this.props.chosenBlog[0]
    };
    document.getElementById('form').reset();
    this.props.submitForm(commentInfo);
    this.props.getBlogComments(this.props.chosenBlog[0].id);
  }

  //makes error message dissapear after some time
  renderErrorMessage() {
    setTimeout(() => this.props.renderError(), 3000);
  }

  render() {
    const error = this.props.error.error;
    if (error) {
      this.renderErrorMessage();
    }
    return this.props.chosenBlog.length === 0 ? null : (
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
            <h1 className="blogTitle">{this.props.chosenBlog[0].title}</h1>
            <div className="lowerBlogHeader">
              <h3 className="blogAuthor">
                By {this.props.chosenBlog[0].author}
              </h3>
              <div className="blogLikesDislikes">
                <button
                  className="blogLikeDislikeButton"
                  onClick={() =>
                    this.props.likeBlog({
                      blog: this.props.chosenBlog[0],
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
                <p>{this.props.chosenBlog[0].BlogLikes.length}</p>
                <button
                  className="blogLikeDislikeButton"
                  onClick={() =>
                    this.props.dislikeBlog({
                      blog: this.props.chosenBlog[0],
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
                <p>{this.props.chosenBlog[0].BlogDislikes.length}</p>
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
                  this.props.chosenBlog[0].artist.stateAbbrev
                }/${this.props.chosenBlog[0].artist.name.split(' ').join('') +
                  `_${this.props.chosenBlog[0].artist.id}`}`}
              >
                <button className="blogToArtistButton">
                  {this.props.chosenBlog[0].artist.name}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="blogPicDescription">
          <div className="blogBannerDiv">
            <img
              className="blogBanner"
              src={this.props.chosenBlog[0].blogPic}
            />
          </div>
        </div>
        <div className="blogPost">
          {this.props.chosenBlog[0].blogPost.split('<>').map(post => {
            return (
              <p key={post.length} className="blogPostText">
                {post}
              </p>
            );
          })}
          <iframe
            className="blogIframe"
            src={this.props.chosenBlog[0].spotifyURL}
            width="600"
            height="200"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />
        </div>
        <Comments blog={this.props.chosenBlog[0]} />
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const { blogs, user, savedArtists, error } = state;
  return {
    artists: sortedArtistsSelector(state),
    blogs: blogs.blogs,
    chosenBlog: blogs.blogs.filter(blog => {
      return '' + blog.id === ownProps.match.params.id;
    }),
    isLoggedIn: !!user.id,
    isAdmin: user.isAdmin,
    user,
    savedArtists,
    error
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchAllArtists());
      dispatch(fetchBlogs());
    },
    fetchSaved() {
      dispatch(fetchSavedArtists());
    },
    delete(id, spotlight) {
      dispatch(deleteCurrentBlog(id, spotlight));
    },
    getBlogComments(id) {
      dispatch(fetchComments(id));
    },
    likeBlog(blog) {
      dispatch(likeCurrentBlog(blog));
    },
    dislikeBlog(blog) {
      dispatch(dislikeCurrentBlog(blog));
    },
    renderError() {
      dispatch(deleteError());
    }
  };
};

export default connect(mapState, mapDispatch)(Blog);
