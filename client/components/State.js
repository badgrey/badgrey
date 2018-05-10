import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'

export const State = (props) => {
  return (
    <div>
      <h1 className="title">{props.stateArtists[0].stateFullName} Artists</h1>
      <div className="state">
      {
        props.stateArtists.map((artist) => (

            <div key={artist.id}>
              <Link className="artistPic" to={`/discover/${artist.stateAbbrev}/${artist.name.split(' ').join('')}`}>
                <img src={artist.imageURL} />
              </Link>
            </div>

        ))
      }
      </div>
    </div>
  )
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
