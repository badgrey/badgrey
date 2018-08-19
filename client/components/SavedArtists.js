import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists, deleteCurrentSavedArtist} from '../store'

export class SavedArtists extends Component{

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true
    }
    this.deleteSaved = this.deleteSaved.bind(this)
    this.saved = this.saved.bind(this)
  }
  deleteSaved(event) {
    console.log(event)
    this.props.delete()
  }

  componentDidMount () {
    if (this.props.artists === []) {
      this.props.loadInitialData()
    }
    this.saved()
  }

  saved() {
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0 && this.state.savedCheck) {
      this.props.fetchSaved()
      this.setState({savedCheck: false})
    }
  }

  render() {
    return (
      this.props.savedArtists.length === 0 ? null :
      <div>
        <h1 className="title">Saved Artists</h1>
        <div className="state">
        {
          this.props.savedArtists.map((artist) => (

              <div key={artist.id} className="savedArtists">
                <Link className="artistPic" to={`/discover/${artist.stateAbbrev}/${artist.name.split(' ').join('')}`}>
                  <div className="artistName">
                    <div className="artistNameText">{artist.name}</div>
                  </div>
                  <img src={require(`../../public/images/artists/${artist.stateAbbrev}/${artist.imageURL}.jpg`)} />
                </Link>
                <button
                className="savedArtistsButton" onClick={() => {this.props.delete(artist.id)
                  this.props.history.push('/saved')}}>X</button>
              </div>
          ))
        }
        </div>
      </div>
    )
  }
}


const mapState = ({artists, user, savedArtists}) => {
  return {
    savedArtists,
    artists,
    isLoggedIn: !!user,
    user
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
    },
    fetchSaved() {
      dispatch(fetchSavedArtists())
    },
    delete(id) {
      dispatch(deleteCurrentSavedArtist(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SavedArtists)
