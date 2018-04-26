import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ARTISTS = 'GET_ARTISTS'

/**
 * ACTION CREATORS
 */

const getArtists = artists => ({type: GET_ARTISTS, artists})

//REDUCER
export default function reducer (artists = [], action){

  switch (action.type) {

    case GET_ARTISTS:
      return action.artists

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
