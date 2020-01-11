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
        <img src="https://badgrey-other.s3.us-east-2.amazonaws.com/musicvideosposter.png" />
      </Link>
      </div>
      <div>
        <Link className="ocOption" to="/originalcontent/CitySounds">
          <img src="https://badgrey-other.s3.us-east-2.amazonaws.com/citysoundsposter.png" />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default OriginalContent
