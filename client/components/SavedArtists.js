import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists} from '../store'

export class SavedArtists extends Component{

  componentDidMount () {
    if (this.props.artists === []) {
      this.props.loadInitialData()
    }
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0) {
      this.props.fetchSaved()
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

              <div key={artist.id}>
                <Link className="artistPic" to={`/discover/${artist.stateAbbrev}/${artist.name.split(' ').join('')}`}>
                  <div className="artistName">
                    <div className="artistNameText">{artist.name}</div>
                  </div>
                  <img src={require(`../../public/images/artists/${artist.stateAbbrev}/${artist.imageURL}.jpg`)} />
                </Link>
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
    }
  }
}

export default connect(mapState, mapDispatch)(SavedArtists)
