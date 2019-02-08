import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists, fetchBlogs} from '../store'
const Infinite = require('react-infinite')


//componnt for all artists page
export class AllArtists extends Component{

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true,
      search: '',
      currentTitle: '# - C',
      numToC: true,
      dToG: false,
      hToK: false,
      lToO: false,
      pToS: false,
      tToW: false,
      xtoZ: false
    }
    this.saved = this.saved.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  //load all data if user is visiting this page for the first time
  componentDidMount () {
    if (this.props.artists === []) {
      this.props.loadInitialData()
    }
  }

  componentDidUpdate () {
    this.saved()
  }

  //if logged in and no saved and it was already checked, fetch saved artists from db
  saved() {
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0 && this.state.savedCheck ) {
      this.props.fetchSaved()
      this.setState({savedCheck: false})
    }
  }

  //for search bar at top
  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    })
  }

  render() {
    // let numToCArtists = []
    // let dToGArtists = []
    // let hToKArtists = []
    // let lToOArtists = []
    // let pToSArtists = []
    // let tToWArtists = []
    // let xToZArtists = []
    // for (let i = 0; i < this.props.artists.length; i++) {
    //   let current = this.props.artists[i]
    //   if ('xyz'.includes(current.name[0].toLowerCase())) {
    //     xToZArtists.push(current)
    //   } else if ('tuvw'.includes(current.name[0].toLowerCase())) {
    //     tToWArtists.push(current)
    //   } else if ('pqrs'.includes(current.name[0].toLowerCase())) {
    //     pToSArtists.push(current)
    //   } else if ('lmno'.includes(current.name[0].toLowerCase())) {
    //     lToOArtists.push(current)
    //   } else if ('hijk'.includes(current.name[0].toLowerCase())) {
    //     hToKArtists.push(current)
    //   } else if ('defg'.includes(current.name[0].toLowerCase())) {
    //     dToGArtists.push(current)
    //   } else {
    //     numToCArtists.push(current)
    //   }
    // }
    // numToCArtists = numToCArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    // dToGArtists = dToGArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    // hToKArtists = hToKArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    // lToOArtists = lToOArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    // pToSArtists = pToSArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    // tToWArtists = tToWArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    // xToZArtists = xToZArtists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    const artists = this.props.artists.filter((artist) => artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    return (
      this.props.artists.length === 0 ? null :
      <Infinite containerHeight={650} elementHeight={100}>
      <div className="artistsDiv">
        <h1 className="title">All Artists</h1>
        <div className="artistSearch">
          <form>
            <label className="searchLabel" >Search Artist</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <h1>{this.state.currentTitle}</h1>
        <div className="state">
        {
          // !this.state.numToC ? null :
          artists.map((artist) => (
            //mapping over every artist and returning picture with link to artists page
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
      </Infinite>
    )
  }
}

//putting all artists in alphabetical order and user and saved artists on props
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

//putting loadinitiail data and fetchsaved on props
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

export default connect(mapState, mapDispatch)(AllArtists)
