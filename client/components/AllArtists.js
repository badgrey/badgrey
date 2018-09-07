import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists} from '../store'

export class AllArtists extends Component{

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true
    }
    this.saved = this.saved.bind(this)
  }

  componentDidMount () {
    if (this.props.stateArtists === []) {
      this.props.loadInitialData()
    }
  }

  componentDidUpdate () {
    this.saved()
  }

  saved() {
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0 && this.state.savedCheck ) {
      this.props.fetchSaved()
      this.setState({savedCheck: false})
    }
  }

  render() {
    return (
      this.props.artists.length === 0 ? null :
      <div>
        <h1 className="title">All Artists</h1>
        <div className="state">
        {
          this.props.artists.map((artist) => (

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
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
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

export default connect(mapState, mapDispatch)(AllArtists)
