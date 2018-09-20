import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import {fetchArtists, deleteCurrentArtist, fetchSavedArtists, addNewSavedArtist} from '../store'
import {Link} from 'react-router-dom'

export class Artist extends Component{

  constructor(props){
    super(props)
    this.state = {
      savedCheck: true
    }
    this.deleteArtist = this.deleteArtist.bind(this)
    this.saved = this.saved.bind(this)
    this.saveArtist = this.saveArtist.bind(this)
  }

  componentDidMount () {
    if (this.props.chosenArtist === []) {
      this.props.loadInitialData()
    }
  }

  componentDidUpdate () {
    this.saved()
  }

  deleteArtist() {
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

  saveArtist() {
    this.props.saveCurrentArtist(this.props.chosenArtist[0].id)
  }

  render() {
    return (
      this.props.chosenArtist.length === 0 ? null :
      <div className="artistContainer">
        <div className="artistHeader" >
          <Link className="stateLink" to={`/discover/${this.props.chosenArtist[0].stateAbbrev}`}>
            <img className="artistLogos" src={require(`../../public/images/states/${this.props.chosenArtist[0].stateAbbrev}.png`)} />
          </Link>
          <div className="artistNameHeader">
            <h1 className="title">{this.props.chosenArtist[0].name}</h1>
            <h3 className="title">{this.props.chosenArtist[0].city}</h3>
            {
              this.props.isSaved ?
              (
                <div>Saved</div>
              )
              :
              (
                <button className="addToSavedButton" onClick={this.saveArtist}>+ Save +</button>
              )
            }
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


const mapState = ({artists, user, savedArtists}, ownProps) => {
  return {
    chosenArtist: artists.filter((artist) => {
      return artist.name.split(' ').join('') === ownProps.match.params.artist
    }),
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    isLoggedIn: !!user.isLoggedIn,
    isAdmin: user.isAdmin,
    savedArtists,
    isSaved: savedArtists.filter((artist) => {
      return artist.id === (artists.filter((otherArtist) => {
        return otherArtist.name.split(' ').join('') === ownProps.match.params.artist
      }))[0].id
    }).length !== 0
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
    fetchSaved() {
      dispatch(fetchSavedArtists())
    },
    saveCurrentArtist(id) {
      dispatch(addNewSavedArtist(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Artist)
