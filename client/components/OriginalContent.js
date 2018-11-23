import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import {fetchOriginalContent, createNewOriginalContent, deleteCurrentOriginalContent, likeCurrentOriginalContent, dislikeCurrentOriginalContent} from '../store'
import {Link} from 'react-router-dom'

export class OriginalContent extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    if (!this.props.originalcontent.length){
      this.props.getOriginalContent()
    }
  }

  submit(event) {
    event.preventDefault()
    let info = {
      youtubeId: event.target.oc.value
    }
    this.props.submitContent(info)
  }

  render() {
    return (
      !this.props.originalcontent.length ? null :
      <div>
        <div className="OCheader">
          <h1>Bad Grey Films</h1>
          <form className="newOC" onSubmit={this.submit}>
            <label>Add Original Content</label>
            <input name="oc" type="text" required placeholder="Youtube ID" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="OCcontainer">
          {
            this.props.originalcontent.map((oc) => {
              return (
                <div key={oc.id} className="singleoc">
                    <YoutubePlayer ytID={oc.youtubeId} />
                    <div className="likesDislikes">
                      <button className="likeDislikeButton" onClick={() => this.props.likeOC({oc, user: this.props.user})}>
                        <img className="likeDislikeImage" src={require('../../public/images/like.png')} />
                      </button>
                      <p>{oc.OriginalContentLikes.length}</p>
                      <button className="likeDislikeButton" onClick={() => this.props.dislikeOC({oc, user: this.props.user})}>
                        <img className="likeDislikeImage" src={require('../../public/images/dislike.png')} />
                      </button>
                      <p>{oc.OriginalContentDislikes.length}</p>
                    </div>
                    {
                      !this.props.isAdmin ? null :
                      <button
                      className="savedArtistsButton" onClick={() => {this.props.delete(oc.id)
                      }}>X</button>
                    }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}


const mapState = ({originalcontent, user}, ownProps) => {
  return {
    originalcontent: originalcontent.sort((ocA, ocB) => {
      if (ocA.createdAt < ocB.createdAt) return -1
      if (ocA.createdAt > ocB.createdAt) return 1
      return 0
    }),
    user,
    isAdmin: user.isAdmin
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOriginalContent() {
      dispatch(fetchOriginalContent())
    },
    submitContent(oc) {
      dispatch(createNewOriginalContent(oc))
    },
    delete(id) {
      dispatch(deleteCurrentOriginalContent(id))
    },
    likeOC(oc) {
      dispatch(likeCurrentOriginalContent(oc))
    },
    dislikeOC(oc) {
      dispatch(dislikeCurrentOriginalContent(oc))
    }
  }
}

export default connect(mapState, mapDispatch)(OriginalContent)
