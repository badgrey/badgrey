import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists, deleteCurrentSavedArtist, fetchBlogs} from '../store'

export class SavedArtists extends Component{

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true,
      search: ''
    }
    this.deleteSaved = this.deleteSaved.bind(this)
    this.saved = this.saved.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  deleteSaved() {
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

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    })
  }

  render() {
    const artists = this.props.savedArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    return (
      this.props.savedArtists.length === 0 ?
      <div className="noSaved">
        <h2>You Don't Have Any Saved Artists!</h2>
        <h6>If you add some they will show up here so you can check them out later</h6>
      </div>
      :
      <div className="savedArtistsDiv">
        <h1 className="title">Saved Artists</h1>
        <div className="artistSearch">
          <form>
            <label className="searchLabel">Search Artist</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <div className="state">
        {
          artists.map((artist) => (

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
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    isLoggedIn: !!user,
    user
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
      dispatch(fetchBlogs())
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
