import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists, fetchBlogs, fetchInterviews} from '../store'

export class Interview extends Component {

  constructor(props) {
    super(props)
    this.state = {
      savedCheck: true,
      search: ''
    }
    this.saved = this.saved.bind(this)
  }

  componentDidMount () {
    if (this.props.artists === []) {
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

  render() {
    return (
      !this.props.chosenInterview[0] ? null :
      <div>
        <div className="interviewHeader">
          <h1>{this.props.chosenInterview[0].artist.name}</h1>
          <p>{this.props.chosenInterview[0].description}</p>
        </div>
        <div className="interviewContainer">
          <div className="interviewSoundcloud">
            <iframe width="1000" height="100" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay" src={this.props.chosenInterview[0].soundcloud} />
          </div>
          <div className="interviewContent">
            <img className="interviewContentPic" src={require(`../../public/images/interviews/${this.props.chosenInterview[0].interview}.jpg`)} />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({artists, blogs, user, savedArtists, interviews}, ownProps) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    isLoggedIn: !!user.id,
    user,
    savedArtists,
    blogs,
    interviews,
    chosenInterview: interviews.filter((interview) => {
      return interview.interview === ownProps.match.params.interview
    })
  }
}
const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchArtists())
      dispatch(fetchBlogs())
      dispatch(fetchInterviews())
    },
    fetchSaved() {
      dispatch(fetchSavedArtists())
    }
  }
}

export default connect(mapState, mapDispatch)(Interview)
