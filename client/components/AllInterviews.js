import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'
import {fetchArtists, fetchSavedArtists, fetchBlogs, fetchInterviews} from '../store'

export class AllInterviews extends Component {

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
      <div>
        <div className="allInterviewsHeader">
          <h1>Interviews</h1>
        </div>
        <div className="allInterviewsContainer">
        {
          this.props.interviews.map((interview, index) => {
            return (
              <div key={interview.id} className={index % 2 === 0 ? 'rightSingleInterview' : 'leftSingleInterview'}>
                <div className={index % 2 === 0 ? 'rightSingleInterviewInfo' : 'leftSingleInterviewInfo'}>
                  <h1>{interview.artist.name}</h1>
                  <p>{interview.description}</p>
                  <Link to={`/interviews/${interview.interview}`}>
                    <button>Read More</button>
                  </Link>
                </div>
                <div className={index % 2 === 0 ? 'rightSingleInterviewPic' : 'leftSingleInterviewPic'}>
                  <img src={require(`../../public/images/artists/${interview.artist.stateAbbrev}/${interview.artist.imageURL}.jpg`)} />
                </div>
              </div>
            )
          })
        }
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
    interviews
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

export default connect(mapState, mapDispatch)(AllInterviews)
