import axios from 'axios'
import { addError } from './error'

/**
 * ACTION TYPES
 */
const GET_SAVED_ARTISTS = 'GET_SAVED_ARTISTS'
const ADD_SAVED_ARTIST = 'ADD_SAVED_ARTIST'
const DELETE_SAVED_ARTIST = 'DELETE_SAVED_ARTIST'

/**
 * ACTION CREATORS
 */

const getSavedArtists = artists => ({type: GET_SAVED_ARTISTS, artists})
const addSavedArtist = artist => ({type: ADD_SAVED_ARTIST, artist})
const deleteSavedArtist = id => ({type: DELETE_SAVED_ARTIST, id})

//REDUCER
export default function reducer (artists = [], action){
  switch (action.type) {

    case GET_SAVED_ARTISTS:
      return action.artists

    case ADD_SAVED_ARTIST:
      return [...artists, action.artist]

    case DELETE_SAVED_ARTIST:
      return artists.filter(artist => artist.id !== action.id)

    default:
      return artists
  }
}

//THUNK CREATORS

export const fetchSavedArtists = () => async (dispatch) => {
  try {
    const artists = await axios.get('/api/artists/saved')
    return dispatch(getSavedArtists(artists.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const addNewSavedArtist = (id) => async (dispatch) => {
  try {
    if (Object.keys(id.user).length === 0) {
      return dispatch(addError({error: 'Login To Save Artist'}))
    }
    const newCreatedArtist = await axios.post(`/api/artists/saved/add/${id.id}`)
    return dispatch(addSavedArtist(newCreatedArtist.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteCurrentSavedArtist = (id) => async (dispatch) => {
  try {
    const deletedArtist = await axios.delete(`/api/artists/saved/${id}`)
    return dispatch(deleteSavedArtist(id))
  }
  catch (err) {
    console.log(err)
  }
}
