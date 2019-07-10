import React, {Component} from 'react'
import {connect} from 'react-redux'
import USAMap from 'react-usa-map'
import '../../public/style.css'
import Genre from './Genre'
import BlogHomePage from './BlogHomePage'
import {FeaturedContent} from './FeaturedContent'
import {Link} from 'react-router-dom'

export class Discover extends Component {

  constructor(props) {
    super(props)
    this.scrollto = null
  }

  //changes route based on state clicked
  clickToState = (event) => {
    const stateName = event.target.dataset.name
    if (stateName === 'DE' || stateName === 'MD' || stateName === 'VA' || stateName === 'DC') {
      this.props.history.push('/discover/DMV')
    }
    else {
      this.props.history.push(`/discover/${stateName}`)
    }
  }

  //makes all states black
  statesCustomConfig = () => {
    return {
      AL: {
        fill: 'black',
      },
      AK: {
        fill: 'black'
      },
      AZ: {
        fill: 'black'
      },
      AR: {
        fill: 'black'
      },
      CA: {
        fill: 'black'
      },
      CO: {
        fill: 'black'
      },
      CT: {
        fill: 'black'
      },
      DE: {
        fill: 'black'
      },
      FL: {
        fill: 'black'
      },
      GA: {
        fill: 'black'
      },
      HI: {
        fill: 'black'
      },
      ID: {
        fill: 'black'
      },
      IL: {
        fill: 'black'
      },
      IN: {
        fill: 'black'
      },
      IA: {
        fill: 'black'
      },
      KS: {
        fill: 'black'
      },
      KY: {
        fill: 'black'
      },
      LA: {
        fill: 'black'
      },
      ME: {
        fill: 'black'
      },
      MA: {
        fill: 'black'
      },
      MD: {
        fill: 'black'
      },
      MI: {
        fill: 'black'
      },
      MN: {
        fill: 'black'
      },
      MS: {
        fill: 'black'
      },
      MO: {
        fill: 'black'
      },
      MT: {
        fill: 'black'
      },
      NE: {
        fill: 'black'
      },
      NV: {
        fill: 'black'
      },
      NH: {
        fill: 'black'
      },
      NJ: {
        fill: 'black',
      },
      NM: {
        fill: 'black'
      },
      NY: {
        fill: 'black'
      },
      NC: {
        fill: 'black'
      },
      ND: {
        fill: 'black'
      },
      OH: {
        fill: 'black'
      },
      OK: {
        fill: 'black'
      },
      OR: {
        fill: 'black'
      },
      PA: {
        fill: 'black'
      },
      RI: {
        fill: 'black'
      },
      OW: {
        fill: 'black'
      },
      SC: {
        fill: 'black'
      },
      SD: {
        fill: 'black'
      },
      TN: {
        fill: 'black'
      },
      TX: {
        fill: 'black'
      },
      UT: {
        fill: 'black'
      },
      VA: {
        fill: 'black'
      },
      VT: {
        fill: 'black'
      },
      WA: {
        fill: 'black'
      },
      WV: {
        fill: 'black'
      },
      WI: {
        fill: 'black'
      },
      WY: {
        fill: 'black'
      }
    }
  }

  setScroll = () => {
    let scrollto = 1000
    if (window.matchMedia('(max-width: 600px)').matches) {
      scrollto = 1100
    } else if (window.matchMedia('(min-width: 600px)').matches && window.matchMedia('(max-width: 900px)').matches) {
      scrollto = 1500
    } else if (window.matchMedia('(min-width: 1400px)').matches && window.matchMedia('(max-width: 1800px)').matches) {
      scrollto = 1100
    } else if (window.matchMedia('(min-width: 1800px)').matches) {
      scrollto = 1420
    }
    return scrollto
  }

  render() {
    let scrollto = this.setScroll()
    return (
      <div className="discover">
        <div className="topContainer">
          <BlogHomePage spotlight={this.props.spotlight} blogs={this.props.nonSpotlight} />
          <FeaturedContent videos={this.props.videos} interview={this.props.interview} />
        </div>
        {
          //scrolls down to 1200 pixels to discover page if the discover button on the navbar is clicked. not sure if this is best way to do this
          this.props.match.path === '/discover' ?
          window.scroll(0, scrollto) :
          null
        }
        <h1>DISCOVER</h1>
        <div className="allAndGlobe">
          <Link className="allArtistsLink" to="/discover/all">
            <button className="allArtistsButton" >View All Artists</button>
          </Link>
          <Link className="internationalLink" to="/discover/International">
            <img className="globe" src={require('../../public/images/states/International.png')} />
            <label className="globeLabel" >International</label>
          </Link>
        </div>
        <div className="Map">
          <USAMap title="Choose Region" width={869} height={503} customize={this.statesCustomConfig()} onClick={this.clickToState} />
        </div>
        <div className="genreDiv">
          <Genre />
        </div>
      </div>
    )
  }
}


const mapState = ({artists, user, savedArtists, blogs, originalcontent, interviews}, ownProps) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    user: user,
    isLoggedIn: !!user.id,
    savedArtists: savedArtists,
    blogs: blogs.blogs,
    spotlight: blogs.spotlight[0],
    nonSpotlight: blogs.nonSpotlight.slice(0, 4),
    videos: originalcontent.slice(0, 3),
    interview: interviews[0]
  }
}


export default connect(mapState)(Discover)

