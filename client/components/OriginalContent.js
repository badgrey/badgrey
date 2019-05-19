import React from 'react'
import { Link } from 'react-router-dom'
import '../../public/style.css'

const OriginalContent = () => {
  return (
    <div className="ocSelectorContainer">
      <div className="ocSelectorHeader">
        <h1>ORIGINAL CONTENT</h1>
      </div>
      <div className="ocSelectorOptions">
      <div>
      <Link className="ocOption" to="/originalcontent/MusicVideo">
      <div className="ocOptionTextContainer">
      <div className="ocOptionText">Music Videos</div>
      </div>
      <img src="https://s3.us-east-2.amazonaws.com/badgrey-other/MusicVideos.png" />
      </Link>
      </div>
      <div>
        <Link className="ocOption" to="/originalcontent/HelloMyNameIs">
          <div className="ocOptionTextContainer">
            <div className="ocOptionText">Hello My Name Is...</div>
          </div>
          <img src="https://s3.us-east-2.amazonaws.com/badgrey-other/HelloMyNameIs.png" />
        </Link>
      </div>
      </div>
    </div>
  )
}


export default OriginalContent
