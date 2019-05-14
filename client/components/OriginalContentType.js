import React, { Component } from 'react'
import { connect } from 'react-redux'
import {YoutubePlayer} from './index'
import {fetchOriginalContent, createNewOriginalContent, deleteCurrentOriginalContent, likeCurrentOriginalContent, dislikeCurrentOriginalContent} from '../store'

export class OriginalContentType extends Component {

  componentDidMount() {
      this.props.loadContent(this.props.match.params.type)
  }

  render() {
    return (
      !this.props.content.length && this.props.isAdmin ?
      <div className="OCcontainerDiv">
        <div className="OCheader">
          <h1>Bad Grey Films</h1>
          <form className="newOC" onSubmit={this.submit}>
            <label>Add Original Content</label>
            <input name="oc" type="text" required placeholder="Youtube ID" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      :
      <div className="OCcontainerDiv">
        <div className="OCheader">
          <h1>Music Videos</h1>
      {
        this.props.isAdmin ?
          <form className="newOC" onSubmit={this.submit}>
            <label>Add Original Content</label>
            <input name="oc" type="text" required placeholder="Youtube ID" />
            <button type="submit">Submit</button>
          </form>
        :
        null
      }
        </div>
        <div className="OCcontainer">
          {
            //maps over all youtube ids and displays original content
            this.props.content.map((oc) => {
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
        <div className="viewMoreButton">
          <button className="allArtistsButton" onClick={() => window.open('https://www.youtube.com/channel/UCcGcK4KeoexHv2A4cf54LOQ/featured', '_blank')}>View More</button>
        </div>
      </div>
    )
  }
}


const mapState = ({originalcontent, user}, ownProps) => {
  return {
    content: originalcontent.sort((ocA, ocB) => {
      if (ocA.createdAt < ocB.createdAt) return 1
      if (ocA.createdAt > ocB.createdAt) return -1
      return 0
    }),
    user,
    isAdmin: user.isAdmin
  }
}

const mapDispatch = () => dispatch  => ({
  loadContent: (type) => dispatch(fetchOriginalContent(type)),
  submitContent: (oc) => dispatch(createNewOriginalContent(oc)),
  delete: (id) => dispatch(deleteCurrentOriginalContent(id)),
  likeOC: (oc) => dispatch(likeCurrentOriginalContent(oc)),
  dislikeOC: (oc) => dispatch(dislikeCurrentOriginalContent(oc))
})

export default connect(mapState, mapDispatch)(OriginalContentType)
