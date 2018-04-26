import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

export class State extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.stateArtists[0].stateFullName} Artists</h1>
        {
          this.props.stateArtists.map((artist) => (

              <div key={artist.id}>
                <img src={artist.imageURL}/>
                <h1>{artist.name}</h1>
              </div>

          ))
        }
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

const mapDispatch = null

export default connect(mapState, mapDispatch)(State)
