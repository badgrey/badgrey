import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists} from '../store'

export class SingleGenre extends Component{

  componentDidMount () {
    console.log(this.props)
    if (this.props.genreArtists === []) {
      this.props.loadInitialData()
    }
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0) {
      this.props.fetchSaved({id: this.props.user.id})
    }
  }
  render() {
    return (
      this.props.genreArtists.length === 0 ? null :
      <div>
        <h1 className="title">{this.props.genreArtists[0].genre} Artists</h1>
        <div className="state">
        {
          this.props.genreArtists.map((artist) => (

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

const mapState = ({artists, user, savedArtists}, ownProps) => {
  return {
    genreArtists: artists.filter((artist) => {
      return artist.genre === ownProps.match.params.genre
    }),
    artists,
    isLoggedIn: !!user.id,
    user,
    savedArtists
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

export default connect(mapState, mapDispatch)(SingleGenre)
