import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import {fetchArtists} from '../store'
import {Link} from 'react-router-dom'


export class Artist extends Component{


  componentDidMount () {
    if (this.props.stateArtists === []) {
      this.props.loadInitialData()
    }
  }

  render() {
    return (
      this.props.chosenArtist.length === 0 ? null :
      <div className="artistContainer">
        <div className="artistHeader" >
          <Link to={`/discover/${this.props.chosenArtist[0].stateAbbrev}`}>
            <img className="artistLogos" src={require(`../../public/images/states/${this.props.chosenArtist[0].stateAbbrev}.png`)} />
          </Link>
          <div className="artistNameHeader">
            <h1 className="title">{this.props.chosenArtist[0].name}</h1>
            <h3 className="title">{this.props.chosenArtist[0].city}</h3>
          </div>
          <Link to={`/discover/genre/${this.props.chosenArtist[0].genre}`} className="genreLink">
            More {this.props.chosenArtist[0].genre} Artists
          </Link>
        </div>
        <div className="divDesc">
          <div>
            <h3>BIO</h3>
            <h5 className="description">{this.props.chosenArtist[0].description}</h5>
          </div>
        </div>
        <div className="soundcloudAndYoutube">
          <div>
            <iframe width="500" height="500" scrolling="no" frameBorder="no" allow="autoplay" src={this.props.chosenArtist[0].soundcloudURL} />
          </div>
          <div className="youtube">
            {
              this.props.chosenArtist[0].youtubeID.map((id) => {
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
}


const mapState = ({artists}, ownProps) => {
  return {
    chosenArtist: artists.filter((artist) => {
      return artist.name.split(' ').join('') === ownProps.match.params.artist
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

export default connect(mapState, mapDispatch)(Artist)
