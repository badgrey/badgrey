import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ARTISTS = 'GET_ARTISTS'
const CREATE_NEW_ARTIST = 'CREATE_NEW_ARTIST'

/**
 * ACTION CREATORS
 */

const getArtists = artists => ({type: GET_ARTISTS, artists})
const newArtist = artist => ({type: CREATE_NEW_ARTIST, artist})

//REDUCER
export default function reducer (artists = [], action){

  switch (action.type) {

    case GET_ARTISTS:
      return action.artists

    case CREATE_NEW_ARTIST:
      return [...artists, action.artist]

    default:
      return artists
  }
}

//THUNK CREATORS

export const fetchArtists = () => async (dispatch) => {
  try {
    const artists = await axios.get('/api/artists')
    dispatch(getArtists(artists.data));
    return artists
  }
  catch (err) {
    console.log(err)
  }
}

export const createNewArtist = (artist) => async (dispatch) => {
  try {
    const newCreatedArtist = await axios.post('/admin', artist)
    dispatch(newArtist(newCreatedArtist.data));
    console.log(newCreatedArtist, 'YOOOOOOOO')
    return newCreatedArtist
  }
  catch (err) {
    console.log(err)
  }
}
