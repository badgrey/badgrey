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
        <img src="https://s3.us-east-2.amazonaws.com/badgrey-other/hmni.png" />
      </Link>
      </div>
      <div>
        <Link className="ocOption" to="/originalcontent/HelloMyNameIs">
          <img src="https://s3.us-east-2.amazonaws.com/badgrey-other/musicvideos.png" />
        </Link>
      </div>
      </div>
    </div>
  )
}


export default OriginalContent
