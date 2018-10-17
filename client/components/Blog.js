import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {fetchBlogs, deleteCurrentBlog, fetchArtists, fetchSavedArtists, fetchComments, fetchUsernames} from '../store'
import {Link} from 'react-router-dom'
import {Comment} from './Comment'

export class Blog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true,
    }
    this.saved = this.saved.bind(this)
    this.deleteBlog = this.deleteBlog.bind(this)
  }

  componentDidMount () {
    if (this.props.artists === []) {
      this.props.loadInitialData()
    }
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

  render() {
    return (
      this.props.chosenBlog.length === 0 ? null :
      <div className="blogContainer">
        <div className="blogHeader">
          <div className="blogNameHeader">
            <h1 className="title">{this.props.chosenBlog[0].title}</h1>
            <h3 className="title">By {this.props.chosenBlog[0].author}</h3>
            <h5>{this.props.chosenBlog[0].description}</h5>
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
          <Link className="authorLink" to={`/allblogs/author/${this.props.chosenBlog[0].author.split(' ').join('')}`}>
            <div className="authorLinkText">
              More by {this.props.chosenBlog[0].author}
            </div>
          </Link>
        </div>
        <div className="blogPost">
            <p>{this.props.chosenBlog[0].blogPost}</p>
        </div>
        <div>
          {
            this.props.blogComments.length === 0 ? null :
            this.props.blogComments.map((comment) => {
              const user = this.props.usernames.filter((name) => {
                return name.id === comment.userId})
              return (
                user.length === 0 ? null :
                <div key={comment.id}>
                  <h1>{user[0].username}</h1>
                  <h1>{comment.comment}</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapState = ({artists, blogs, user, savedArtists, comments, usernames}, ownProps) => {
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
    comments,
    usernames,
    blogComments: comments.filter((comment) => {
      return '' + comment.blogId === ownProps.match.params.id
    })
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
      dispatch(fetchBlogs())
      dispatch(fetchComments())
      dispatch(fetchUsernames())
    },
    fetchSaved() {
      dispatch(fetchSavedArtists())
    },
    delete (id) {
      dispatch(deleteCurrentBlog(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Blog)
