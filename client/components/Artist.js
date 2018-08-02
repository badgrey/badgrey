import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import {fetchArtists, deleteCurrentArtist, fetchSavedArtists} from '../store'
import {Link} from 'react-router-dom'

export class Artist extends Component{

  constructor(props){
    super(props)
    this.deleteArtist = this.deleteArtist.bind(this)
  }

  componentDidMount () {
    if (this.props.stateArtists === []) {
      this.props.loadInitialData()
    }
    if (this.props.isLoggedIn) {
      this.props.fetchSaved(this.props.user.id)
    }
  }

  deleteArtist() {
    const state = this.props.chosenArtist[0].stateAbbrev
    this.props.delete(this.props.chosenArtist[0].id)
    this.props.history.push(`/discover/${state}`)
  }

  render() {
    return (
      this.props.chosenArtist.length === 0 ? null :
      <div className="artistContainer">
        <div className="artistHeader" >
          <Link to={`/discover/${this.props.chosenArtist[0].stateAbbrev}`}>
            <img className="artistLogos" src={require(`../../public/images/states/${this.props.chosenArtist[0].stateAbbrev}.png`)} />
          </Link>
          <div className="artistNameHeader">
            <h1 className="title">{this.props.chosenArtist[0].name}</h1>
            <h3 className="title">{this.props.chosenArtist[0].city}</h3>
            {
              !this.props.isLoggedIn && !this.props.isAdmin ? null :
              <div className="adminButtons">
                <Link id="editButton"to={`/edit/${this.props.match.params.artist}`}>
                  <button className="editdelete">Edit Artist Info</button>
                </Link>
                <button className="editdelete" onClick={this.deleteArtist} >DELETE ARTIST</button>
              </div>
            }
          </div>
          <div className="genreLink">
            <Link to={`/discover/genre/${this.props.chosenArtist[0].genre}`} className="genreLinkText">
              More {this.props.chosenArtist[0].genre} Artists
            </Link>
          </div>
        </div>
        <div className="soundcloudAndYoutube">
          <div>
            <iframe width="500" height="500" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay" src={this.props.chosenArtist[0].soundcloudURL} />
          </div>
          <div className="youtube">
            {
              this.props.chosenArtist[0].youtubeID.map((id) => {
                return (
                  <YoutubePlayer key={id} ytID={id} />
                )
              })
            }
          </div>
        </div>
      </div>
    )

  }
}


const mapState = ({artists, user}, ownProps) => {
  return {
    chosenArtist: artists.filter((artist) => {
      return artist.name.split(' ').join('') === ownProps.match.params.artist
    }),
    artists,
    isLoggedIn: !!user.isLoggedIn,
    isAdmin: user.isAdmin
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
    },
    delete (id) {
      dispatch(deleteCurrentArtist(id))
    },
    fetchSaved(id) {
      dispatch(fetchSavedArtists(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Artist)
