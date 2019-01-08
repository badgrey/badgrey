import React from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'


const Submit = function() {
  return (
    <div className="submitContainerDiv">
      <div className="submitHeader">
        <h1>Submit Your Content To Us Here</h1>
      </div>
      <div className="submitContainer">
        <h4>If you would like to submit content to us, or contact us for any reason, send the following information to</h4>
        <h3>badgreyfilms@gmail.com</h3>
        <h5>Your Name</h5>
        <h5>Where You're From</h5>
        <h5>Links To Your Soundcloud and Music Videos</h5>
        <h6>Thank you!</h6>
      </div>
    </div>
  )
}

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(Submit)
