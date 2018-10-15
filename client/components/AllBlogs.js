import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists, fetchBlogs} from '../store'

export class AllBlogs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true,
      search: ''
    }
    this.saved = this.saved.bind(this)
  }

  componentDidMount () {
    if (this.props.artists === []) {
      this.props.loadInitialData()
    }
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
      <div className="allBlogsDiv">
        <h1>All Blog Posts</h1>
        <div className="blogsList">
          {
            this.props.blogs.map((blog) => {
              return (
                <Link className="singleBlogLink" key={blog.id} to={`/allblogs/${blog.id}`}>
                  <div className="singleBlog">
                    <h1>{blog.title}</h1>
                    <h2>{blog.author}</h2>
                    <h3>{blog.description}</h3>
                    <h4>{blog.date}</h4>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapState = ({artists, blogs, user, savedArtists}, ownProps) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    isLoggedIn: !!user.id,
    user,
    savedArtists,
    blogs
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
    }
  }
}

export default connect(mapState, mapDispatch)(AllBlogs)