import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists} from '../store'

export class State extends Component{

  componentDidMount () {
    if (this.props.stateArtists === []) {
      this.props.loadInitialData()
    }
  }
  render() {
    return (
      this.props.stateArtists.length === 0 ? null :
      <div>
        <h1 className="title">{this.props.stateArtists[0].stateFullName} Artists</h1>
        <div className="state">
        {
          this.props.stateArtists.map((artist) => (

              <div key={artist.id}>
                <Link className="artistPic" to={`/discover/${artist.stateAbbrev}/${artist.name.split(' ').join('')}`}>
                  <img src={require(`../../public/images/artists/${artist.stateAbbrev}/${artist.imageURL}.jpg`)} />
                  <div className="artistName">
                    <div className="artistNameText">{artist.name}</div>
                  </div>
                </Link>
              </div>
          ))
        }
        </div>
      </div>
    )
  }
}


const mapState = ({artists}, ownProps) => {
  return {
    stateArtists: artists.filter((artist) => {
      return artist.stateAbbrev === ownProps.match.params.state
    }),
    artists
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
    }
  }
}

export default connect(mapState, mapDispatch)(State)
