import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {fetchBlogs, deleteCurrentBlog, fetchArtists, fetchSavedArtists, fetchComments, fetchUsernames} from '../store'
import {Link} from 'react-router-dom'

export class Comment extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      this.props == {} ? null :
      <div>
       hi
      </div>
    )
  }
}

const mapState = ({artists, usernames, blogs, user, savedArtists, comments}, ownProps) => {
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
    chsoenComments: comments.filter((comment) => {
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


export default connect(mapState, mapDispatch)(Comment)
