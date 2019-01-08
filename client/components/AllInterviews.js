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
    this.handleSearch = this.handleSearch.bind(this)
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

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    })
  }

  render() {
    const interviews = this.props.interviews.filter((interview) => interview.artist.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
    return (
      <div className="allInterviewsContainerDiv">
        <div className="allInterviewsHeader">
          <h1>Interviews</h1>
        </div>
        <div className="artistSearch">
          <form>
            <label className="searchLabel" >Search Artist</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <div className="allInterviewsContainer">
        {
          interviews.map((interview, index) => {
            return (
              index % 2 === 0 ?
              <div key={interview.id} className="rightSingleInterview">
                <div className="rightSingleInterviewInfo">
                  <h1>{interview.artist.name}</h1>
                  <p>{interview.description}</p>
                  <Link to={`/interviews/${interview.id}`}>
                    <button className="interviewButton">Read More</button>
                  </Link>
                </div>
                <div className="singleInterviewPic">
                  <img src={require(`../../public/images/artists/${interview.artist.stateAbbrev}/${interview.artist.imageURL}.jpg`)} />
                </div>
              </div>
              :
              <div key={interview.id} className="leftSingleInterview">
                <div className="singleInterviewPic">
                  <img src={require(`../../public/images/artists/${interview.artist.stateAbbrev}/${interview.artist.imageURL}.jpg`)} />
                </div>
                <div className="leftSingleInterviewInfo">
                  <h1>{interview.artist.name}</h1>
                  <p>{interview.description}</p>
                  <Link to={`/interviews/${interview.id}`}>
                    <button className="interviewButton">Read More</button>
                  </Link>
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
    interviews: interviews.sort((interviewA, interviewB) => {
      if (interviewA.createdAt < interviewB.createdAt) return 1
      if (interviewA.createdAt > interviewB.createdAt) return -1
      return 0
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

export default connect(mapState, mapDispatch)(AllInterviews)
