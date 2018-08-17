import React, {Component} from 'react'
import {connect} from 'react-redux'
import USAMap from 'react-usa-map'
import '../../public/style.css'
import Genre from './Genre'
import {fetchSavedArtists} from '../store'

export class Discover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true
    }
    this.saved = this.saved.bind(this)
  }

  clickToState = (event) => {
    const stateName = event.target.dataset.name
    if (stateName === 'DE' || stateName === 'MD' || stateName === 'VA' || stateName === 'DC') {
      this.props.history.push('/discover/DMV')
    }
    else {
      this.props.history.push(`/discover/${stateName}`)
    }
  }

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
      NJ:{
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

  componentDidMount () {
    this.saved()
  }

  saved() {
    if (this.props.isLoggedIn && this.props.savedArtists.length === 0 && this.state.savedCheck) {
      this.props.loadInitialData()
      this.setState({savedCheck: false})
    }
  }

  render() {
    return (
      <div className="discover">
        <h1>Discover Below</h1>
        <div className="Map">
          <USAMap title="Choose Region" width={869} height={503} customize={this.statesCustomConfig()} onClick={this.clickToState} />
        </div>
        <div>
          <Genre />
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    artists: state.artists,
    user: state.user,
    isLoggedIn: !!state.user.id,
    savedArtists: state.savedArtists
  }
}


const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchSavedArtists())
    }
  }
}

export default connect(mapState, mapDispatch)(Discover)

