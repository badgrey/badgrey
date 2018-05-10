import React from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import badGreyWolfLogo from '../../public/images/badGreyWolfLogo.png'

export const Artist = (props) => {

    return (
      <div className="artistContainer">
        <div>
          <div>

          </div>
          <div>
            <h1 className="title">{props.chosenArtist[0].name}</h1>
            <h3 className="title">{props.chosenArtist[0].city}</h3>
          </div>
          <div>
            <img src={badGreyWolfLogo} />
          </div>
        </div>
        <div className="divDesc">
          <div>
            <h3>BIO</h3>
            <h5 className="description">{props.chosenArtist[0].description}</h5>
          </div>
        </div>
        <div className="soundcloudAndYoutube">
          <div>
            <iframe width="500" height="500" scrolling="no" frameBorder="no" allow="autoplay" src={props.chosenArtist[0].soundcloudURL} />
          </div>
          <div className="youtube">
            {
              props.chosenArtist[0].youtubeID.map((id) => {
                return (
                  <YoutubePlayer key={id} ytID={id} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
}


const mapState = ({artists}, ownProps) => {
  return {
    chosenArtist: artists.filter((artist) => {
      return artist.name.split(' ').join('') === ownProps.match.params.artist
    }),
    artists
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(Artist)
