import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ARTISTS = 'GET_ARTISTS'
const CREATE_NEW_ARTIST = 'CREATE_NEW_ARTIST'
const EDIT_ARTIST = 'EDIT_ARTIST'
const DELETE_ARTIST = 'DELETE ARTIST'

/**
 * ACTION CREATORS
 */

const getArtists = artists => ({type: GET_ARTISTS, artists})
const newArtist = artist => ({type: CREATE_NEW_ARTIST, artist})
const editArtist = artist => ({type: EDIT_ARTIST, artist})
const deleteArtist = id => ({type: DELETE_ARTIST, id})

//REDUCER
export default function reducer (artists = [], action){

  switch (action.type) {

    case GET_ARTISTS:
      return action.artists

    case CREATE_NEW_ARTIST:
      return [...artists, action.artist]

    case EDIT_ARTIST:
      return artists.map(artist => (
        action.artist.id === artist.id ? action.artist : artist
      ));

    case DELETE_ARTIST:
      return artists.filter(artist => artist.id !== action.id)

    default:
      return artists
  }
}

//THUNK CREATORS

export const fetchArtists = () => async (dispatch) => {
  try {
    const artists = await axios.get('/api/artists')
    return dispatch(getArtists(artists.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const createNewArtist = (artist) => async (dispatch) => {
  try {
    const newCreatedArtist = await axios.post('/api/artists/admin', artist)
    return dispatch(newArtist(newCreatedArtist.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const editCurrentArtist = (id, artist) => async (dispatch) => {
  try {
    const editedArtist = await axios.put(`/api/artists/admin/${id}`, artist)
    return dispatch(editArtist(editedArtist.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteCurrentArtist = (id) => async (dispatch) => {
  try {
    const deletedArtist = await axios.delete(`/api/artists/admin/${id}`)
    return dispatch(deleteArtist(id))
  }
  catch (err) {
    console.log(err)
  }
}
