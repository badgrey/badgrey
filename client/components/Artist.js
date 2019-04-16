import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import {fetchArtists, deleteCurrentArtist, fetchSavedArtists, addNewSavedArtist, fetchBlogs, fetchArtistComments, createNewComment, deleteCurrentComment, likeCurrentComment, dislikeCurrentComment, likeCurrentArtist, dislikeCurrentArtist, fetchInterviews, deleteError} from '../store'
import {Link} from 'react-router-dom'
import axios from 'axios'

//individual artist page component
export class Artist extends Component{

  constructor(props){
    super(props)
    this.state = {
      savedCheck: true
    }
    this.deleteArtist = this.deleteArtist.bind(this)
    this.saved = this.saved.bind(this)
    this.saveArtist = this.saveArtist.bind(this)
    this.postComment = this.postComment.bind(this)
  }

  //getting initial data and comments for specific user when getting to page
  componentDidMount () {
    window.scroll(0, 0)
    if (this.props.chosenArtist === []) {
      this.props.loadInitialData()
    }
    // eslint-disable-next-line radix
    const id = parseInt(this.props.match.params.artist.split('_')[1])
    this.props.getArtistComments(id)
  }

  componentDidUpdate () {
    this.saved()
  }

  //deletes artist
  async deleteArtist() {
    await axios.post('/api/deleteArtistPicture', {name: this.props.chosenArtist[0].fileKey})
    const state = this.props.chosenArtist[0].stateAbbrev
    this.props.delete(this.props.chosenArtist[0].id)
    this.props.history.push(`/discover/${state}`)
  }

  saved() {
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0 && this.state.savedCheck) {
      this.props.fetchSaved()
      this.setState({savedCheck: false})
    }
  }

  //posts commentand resets the form
  postComment(event) {
    event.preventDefault()
    let commentInfo = {
      comment: {comment: event.target.comment.value},
      user: this.props.user,
      artist: this.props.chosenArtist[0]
    }
    document.getElementById('form').reset()
    this.props.submitForm(commentInfo)
    this.props.getArtistComments(this.props.chosenArtist[0].id)
  }

  //saves artist to users saved page
  saveArtist() {
    this.props.saveCurrentArtist({id: this.props.chosenArtist[0].id, user: this.props.user})
  }

  //gets rid of error message after a little
  renderErrorMessage() {
    setTimeout(() => this.props.renderError(), 3000)
  }

  // eslint-disable-next-line complexity
  render() {
    const error = this.props.error.error
    if (error) {
      this.renderErrorMessage()
    }
    return (
      this.props.chosenArtist.length === 0 ? null :
      <div className="artistContainer">
        <div className="artistHeader" >
          <Link className="stateLink" to={`/discover/${this.props.chosenArtist[0].stateAbbrev}`}>
            <img className="artistLogos" src={require(`../../public/images/states/${this.props.chosenArtist[0].stateAbbrev}.png`)} />
          </Link>
          <div className="artistNameHeader">
            <h1 className="title">{this.props.chosenArtist[0].name}</h1>
            <h3 className="artistCity">{this.props.chosenArtist[0].city}</h3>
            {
              //depending if artist is saved or not will display a button to save them or just "saved"
              this.props.isSaved ?
              (
                <div>Saved</div>
              )
              :
              (
                <button className="addToSavedButton" onClick={this.saveArtist}>+ Save +</button>

              )
            }
            {error ?
              //displays error if trying to save artist when not logged in
              error.error === 'Login To Save Artist' && (
              <div className="commentPostError">
                <p>{error.error}</p>
              </div>
              )
              :
              null
            }
            <div className="artistLikesDislikes">
              <button className="likeDislikeButton" onClick={() => this.props.likeArtist({artist: this.props.chosenArtist[0], user: this.props.user})}>
                <img className="likeDislikeImage" src={require('../../public/images/like.png')} />
              </button>
              <p>{this.props.chosenArtist[0].ArtistLikes.length}</p>
              <button className="likeDislikeButton" onClick={() => this.props.dislikeArtist({artist: this.props.chosenArtist[0], user: this.props.user})}>
                <img className="likeDislikeImage" src={require('../../public/images/dislike.png')} />
              </button>
              <p>{this.props.chosenArtist[0].ArtistDislikes.length}</p>
            </div>
            {error ?
              //puts forward error if trying to like or dislike artist when not logged in
              error.error === 'Login To Upvote/Downvote Artist' && (
              <div className="commentPostError">
                <p>{error.error}</p>
              </div>
              )
              :
              null
            }
            {
              //displays admin buttons for edit or delete if admin
              !this.props.isLoggedIn && !this.props.isAdmin ? null :
              <div className="adminButtons">
                <Link id="editButton" to={`/edit/${this.props.match.params.artist}`}>
                  <button className="editdelete">Edit Artist Info</button>
                </Link>
                <button className="editdelete" onClick={this.deleteArtist} >DELETE ARTIST</button>
              </div>
            }
          </div>
          <Link to={`/discover/genre/${this.props.chosenArtist[0].genre}`} className="genreLink">
            <div className="genreLinkText">
              More {this.props.chosenArtist[0].genre} Artists
            </div>
          </Link>
        </div>
        <div className="soundcloudAndYoutube">
          <div className="soundcloud">
            <iframe width="500" height="500" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay" src={this.props.chosenArtist[0].soundcloudURL} />
          </div>
          <div className="youtube">
            {
              //maps through youtube ids and puts up youtube video for each artist
              this.props.chosenArtist[0].youtubeID.map((id) => {
                return (
                  <YoutubePlayer key={id} ytID={id} />
                )
              })
            }
          </div>
        </div>
        <div className="artistCommentContainer">
            <form onSubmit={this.postComment} id="form" className="commentForm">
              <label>Comment</label>
              <textarea name="comment" type="text" required />
              <button type="submit">Post</button>
              {error ?
                //posts error if trying to comment on artist page and not logged in
                error.error === 'Login To Comment' && (
                <div className="commentPostError">
                  <p>{error.error}</p>
                </div>
                )
                :
                null
              }
            </form>
            <div className="commentList">
          {
            //mapping over all artist comments
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
                  {error ?
                    //posts error when trying to like or dislike comment
                    error.error === 'Login To Upvote/Downvote' && (
                    <div className="commentPostError">
                      <p>{error.error}</p>
                    </div>
                    )
                    :
                    null
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

//putting artists comments chosen artist savedartists error and is saved on props
const mapState = ({artists, user, savedArtists, comments, error}, ownProps) => {
  return {
    chosenArtist: artists.filter((artist) => {
      let targetArtist = ownProps.match.params.artist.split('_')[0]
      return artist.name.split(' ').join('') === targetArtist
    }),
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    comments: comments.sort((commentA, commentB) => {
      if (commentA.Likes.length < commentB.Likes.length) return 1
      if (commentA.Likes.length > commentB.Likes.length) return -1
      return 0
    }),
    isLoggedIn: !!user.isLoggedIn,
    isAdmin: user.isAdmin,
    user,
    error,
    savedArtists,
    isSaved: savedArtists.filter((artist) => {
      return artist.id === (artists.filter((otherArtist) => {
        return otherArtist.name.split(' ').join('') === ownProps.match.params.artist.split('_')[0]
      }))[0].id
    }).length !== 0
  }
}

//buncha stuff over here on props too
const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
      dispatch(fetchBlogs())
      dispatch(fetchInterviews())
    },
    delete (id) {
      dispatch(deleteCurrentArtist(id))
    },
    fetchSaved() {
      dispatch(fetchSavedArtists())
    },
    saveCurrentArtist(id) {
      dispatch(addNewSavedArtist(id))
    },
    getArtistComments (id) {
      dispatch(fetchArtistComments(id))
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
    submitForm(comment) {
      dispatch(createNewComment(comment))
    },
    likeArtist(artist) {
      dispatch(likeCurrentArtist(artist))
    },
    dislikeArtist(artist) {
      dispatch(dislikeCurrentArtist(artist))
    },
    renderError() {
      dispatch(deleteError())
    }
  }
}

export default connect(mapState, mapDispatch)(Artist)
