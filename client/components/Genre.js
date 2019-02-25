import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const Genre = () => {
  const genres = ['Trap', 'Conscious', 'Alternative', 'Cloud', 'Old School', 'Jazz / Soul', 'Pop', 'R&B', 'Experimental', 'Instrumental' ]
  return (
    <div className="genreGrid">
      {
        genres.map((genre) => {
          //maps out the genre array to a grid, and replaces the spaces and symbols in genre with blan space
          let current = genre;
          if (genre === 'Jazz / Soul') {
            current = 'JazzSoul'
          }
          return (
            <Link to={`/discover/genre/${current}`} className="genreName" id={current} key={current}>
              {genre}
            </Link>
          )
        })
      }
    </div>
  )
}

const mapState = null


const mapDispatch = null

export default connect(mapState, mapDispatch)(Genre)
