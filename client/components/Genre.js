import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const Genre = () => {
  const genres = ['Trap', 'Conscious', 'Alternative', 'Cloud', 'Old School', 'Jazz / Soul', 'Pop', 'R&B', 'Experimental', 'Instrumental' ]
  return (
    <div className="genreGrid">
      {
        genres.map((genre) => (
          <Link to={`/discover/genre/${genre}`} className="genreName" key={genre}>
            {genre}
          </Link>
        ))
      }
    </div>
  )
}

const mapState = null


const mapDispatch = null

export default connect(mapState, mapDispatch)(Genre)
