import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists, fetchBlogs} from '../store'

//for indivisula states display of artists that live there
export class State extends Component{

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true,
      search: ''
    }
    this.saved = this.saved.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  //load data if no artists
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

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    })
  }

  render() {
    const artists = this.props.stateArtists.filter((artist) => artist.name.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      //if there are no artists in this state load informative message
      this.props.stateArtists.length === 0 ?
      <div className="noArtistsContainer">
        <div className="noArtists">
          <h2>We Do Not Know Of Any Artists From This State</h2>
          <h6>If You Are An Artist From This Area Or Know Of One, Please Contact Us Through The Submit Button At The Top Of The Page</h6>
        </div>
      </div>
      :
      <div className="artistsDiv">
        <h1 className="title">{this.props.stateArtists[0].stateFullName}</h1>
        <h6 className="scrolltoload">Scroll to Load More</h6>
        <div className="artistSearch">
          <form>
            <label className="searchLabel">Search Artists</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <div className="state">
        {
          artists.map((artist) => (
            //map over artists and display link for their individual page
              <div key={artist.id}>
                <Link className="artistPic" to={`/discover/${artist.stateAbbrev}/${artist.name.split(' ').join('') + `_${artist.id}`}`}>
                  <div className="artistName">
                    <div className="artistNameText">{artist.name}</div>
                  </div>
                  <img src={artist.imageURL} />
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
    stateArtists: artists.filter((artist) => {
      return artist.stateAbbrev === ownProps.match.params.state
    }),
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
      dispatch(fetchBlogs())
    },
    fetchSaved() {
      dispatch(fetchSavedArtists())
    }
  }
}

export default connect(mapState, mapDispatch)(State)
