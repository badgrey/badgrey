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
    const likes = this.props.loadLikes(this.props.comment)
    const dislikes = this.props.loadDislikes(this.props.comment)
    console.log(likes, dislikes)
    return (
    props.username.length === 0 ? null :
      <div>
        <h1>{props.username[0].username}</h1>
        <h1>{props.comment.comment}</h1>
      </div>
    )
  }
}

const mapState = null

const mapDispatch = (dispatch) => {
  return {
    loadLikes(comment) {
      dispatch(comment.getLikes())
    },
    loadDislikes(comment) {
      dispatch(comment.getDislikes())
    }
  }
}


export default connect(mapState, mapDispatch)(Comment)
