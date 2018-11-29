import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {fetchBlogs, deleteCurrentBlog, fetchArtists, fetchSavedArtists, fetchComments, createNewComment, deleteCurrentComment, likeCurrentComment, dislikeCurrentComment, likeCurrentBlog, dislikeCurrentBlog} from '../store'
import {Link} from 'react-router-dom'


export class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true,
    }
    this.saved = this.saved.bind(this)
    this.deleteBlog = this.deleteBlog.bind(this)
    this.loadLikes = this.loadLikes.bind(this)
    this.postComment = this.postComment.bind(this)
  }

  componentDidMount () {
    if (this.props.artists === []) {
      this.props.loadInitialData()
    }
    const id = parseInt(this.props.match.params.id)
    this.props.getBlogComments(id)
  }

  deleteBlog() {
    this.props.delete(this.props.chosenBlog[0].id)
    this.props.history.push('/allblogs')
  }

  componentDidUpdate () {
    this.saved()
  }

  saved() {
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0 && this.state.savedCheck ) {
      this.props.fetchSaved()
      this.setState({savedCheck: false})
    }
  }

  loadLikes(comment) {
   return this.props.getLikes(comment)
  }

  postComment(event) {
    event.preventDefault()
    let commentInfo = {
      comment: {comment: event.target.comment.value},
      user: this.props.user,
      blog: this.props.chosenBlog[0]
    }
    document.getElementById('form').reset()
    this.props.submitForm(commentInfo)
    this.props.getBlogComments(this.props.chosenBlog[0].id)
  }

  render() {
    const chosenArtist = this.props.chosenBlog.length === 0 ? null :
    this.props.artists.filter((artist) => {
      return this.props.chosenBlog[0].artistId === artist.id
    })
    return (
      this.props.chosenBlog.length === 0 ? null :
      <div className="blogContainer">
        <div className="blogHeader">
          <Link className="authorLink" to={`/allblogs/author/${this.props.chosenBlog[0].author.split(' ').join('')}`}>
            <div className="authorLinkText">
              More by {this.props.chosenBlog[0].author}
            </div>
          </Link>
          <div className="blogNameHeader">
            <h1 className="title">{this.props.chosenBlog[0].title}</h1>
            <h3 className="title">By {this.props.chosenBlog[0].author}</h3>
            <h5>{this.props.chosenBlog[0].description}</h5>
            <div className="likesDislikes">
              <button className="likeDislikeButton" onClick={() => this.props.likeBlog({blog: this.props.chosenBlog[0], user: this.props.user})}>
                <img className="likeDislikeImage" src={require('../../public/images/like.png')} />
              </button>
              <p>{this.props.chosenBlog[0].BlogLikes.length}</p>
              <button className="likeDislikeButton" onClick={() => this.props.dislikeBlog({blog: this.props.chosenBlog[0], user: this.props.user})}>
                <img className="likeDislikeImage" src={require('../../public/images/dislike.png')} />
              </button>
              <p>{this.props.chosenBlog[0].BlogDislikes.length}</p>
            </div>
            {
            !this.props.isLoggedIn && !this.props.isAdmin ? null :
            <div className="adminButtons">
              <Link id="editButton" to={`/editBlog/${this.props.match.params.id}`}>
                <button className="editdelete">Edit Blog</button>
              </Link>
              <button className="editdelete" onClick={this.deleteBlog} >DELETE BLOG</button>
            </div>
            }
          </div>
          <Link className="artistPic" to={`/discover/${chosenArtist[0].stateAbbrev}/${chosenArtist[0].name.split(' ').join('') + `_${chosenArtist[0].id}`}`}>
                  <div className="artistName">
                    <div className="artistNameText">{chosenArtist[0].name}</div>
                  </div>
                  <img src={require(`../../public/images/artists/${chosenArtist[0].stateAbbrev}/${chosenArtist[0].imageURL}.jpg`)} />
                </Link>
        </div>
        <div className="blogPost">
            <p>{this.props.chosenBlog[0].blogPost}</p>
        </div>
        <div className="commentContainer">
            <form onSubmit={this.postComment} id="form" className="commentForm">
              <label>Comment Here</label>
              <input name="comment" type="text" required />
              <button type="submit">Post</button>
            </form>
            <div className="commentList">
          {
            this.props.comments.map((comment) => {
              return (
              <div className="singleComment" key={comment.id}>
                <p className="commentUser" >{comment.user.username}</p>
                <p>{comment.comment}</p>
                <div className="likesDislikes">
                  <button className="likeDislikeButton" onClick={() => this.props.likeComment({comment, user: this.props.user})}>
                    <img className="likeDislikeImage" src={require('../../public/images/like.png')} />
                  </button>
                  <p>{comment.Likes.length}</p>
                  <button className="likeDislikeButton" onClick={() => this.props.dislikeComment({comment, user: this.props.user})}>
                    <img className="likeDislikeImage" src={require('../../public/images/dislike.png')} />
                  </button>
                  <p>{comment.Dislikes.length}</p>
                  {
                    this.props.user.id !== comment.user.id ? null :
                    <div>
                      <button className="deleteCommentButton" onClick={() => this.props.deleteComment(comment.id)}>X</button>
                    </div>
                  }
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({artists, blogs, user, savedArtists, comments}, ownProps) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    blogs,
    chosenBlog: blogs.filter((blog) => {
      return '' + blog.id === ownProps.match.params.id
    }),
    isLoggedIn: !!user.id,
    isAdmin: user.isAdmin,
    user,
    savedArtists,
    comments: comments.sort((commentA, commentB) => {
      if (commentA.Likes.length < commentB.Likes.length) return 1
      if (commentA.Likes.length > commentB.Likes.length) return -1
      return 0
    })
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
      dispatch(fetchBlogs())
    },
    fetchSaved() {
      dispatch(fetchSavedArtists())
    },
    delete (id) {
      dispatch(deleteCurrentBlog(id))
    },
    getBlogComments (id) {
      dispatch(fetchComments(id))
    },
    submitForm(comment) {
      dispatch(createNewComment(comment))
    },
    deleteComment(id) {
      dispatch(deleteCurrentComment(id))
    },
    likeComment(comment) {
      dispatch(likeCurrentComment(comment))
    },
    dislikeComment(comment) {
      dispatch(dislikeCurrentComment(comment))
    },
    likeBlog(blog) {
      dispatch(likeCurrentBlog(blog))
    },
    dislikeBlog(blog) {
      dispatch(dislikeCurrentBlog(blog))
    }
  }
}

export default connect(mapState, mapDispatch)(Blog)
