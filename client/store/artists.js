/* eslint-disable complexity */
import axios from 'axios';
import { addError } from './error';

/**
 * ACTION TYPES
 */
const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';
const GET_STATE_ARTISTS = 'GET_STATE_ARTISTS';
const GET_GENRE_ARTISTS = 'GET_GENRE_ARTISTS';
const CREATE_NEW_ARTIST = 'CREATE_NEW_ARTIST';
const EDIT_ARTIST = 'EDIT_ARTIST';
const DELETE_ARTIST = 'DELETE_ARTIST';
const LIKE_ARTIST = 'LIKE_ARTIST';
const DISLIKE_ARTIST = 'DISLIKE_ARTIST';
const CLEAR_ARTIST_STATE = 'CLEAR_ARTIST_STATE';

/**
 * ACTION CREATORS
 */

const getArtists = artists => ({ type: GET_ALL_ARTISTS, payload: artists });
const getStateArtists = artists => ({
  type: GET_STATE_ARTISTS,
  payload: artists
});
const getGenreArtists = artists => ({
  type: GET_GENRE_ARTISTS,
  payload: artists
});
const newArtist = artist => ({ type: CREATE_NEW_ARTIST, payload: artist });
const editArtist = artist => ({ type: EDIT_ARTIST, payload: artist });
const deleteArtist = id => ({ type: DELETE_ARTIST, payload: id });
const likeArtist = artist => ({ type: LIKE_ARTIST, payload: artist });
const dislikeArtist = artist => ({ type: DISLIKE_ARTIST, payload: artist });
export const clearArtistState = () => ({ type: CLEAR_ARTIST_STATE });

const initialArtistState = {
  numArtists: 0,
  allArtists: [],
  numStateArtists: 0,
  stateArtists: [],
  numGenreArtists: 0,
  genreArtists: []
};
//REDUCER
export default function reducer(state = initialArtistState, action) {
  switch (action.type) {
    case GET_ALL_ARTISTS:
      return {
        ...state,
        numArtists: action.payload.count,
        allArtists: action.payload.rows
      };
    case GET_STATE_ARTISTS:
      return {
        ...state,
        numStateArtists: action.payload.count,
        stateArtists: action.payload.rows
      };
    case GET_GENRE_ARTISTS:
      return {
        ...state,
        numGenreArtists: action.payload.count,
        genreArtists: action.payload.rows
      };
    case CREATE_NEW_ARTIST:
      return {
        ...state,
        artists: [...state.artists, action.payload]
      };
    case EDIT_ARTIST:
      return {
        ...state,
        artists: state.artists.map(artist => {
          if (action.payload.id === artist.id) {
            return action.payload;
          }
          return artist;
        })
      };
    case DELETE_ARTIST:
      return {
        ...state,
        artists: state.artists.filter(artist => artist.id !== action.payload)
      };
    case LIKE_ARTIST:
      return {
        ...state,
        artists: state.artists.map(artist => {
          if (action.payload.id === artist.id) {
            return action.payload;
          }
          return artist;
        })
      };
    case DISLIKE_ARTIST:
      return {
        ...state,
        artists: state.artists.map(artist => {
          if (action.payload.id === artist.id) {
            return action.payload;
          }
          return artist;
        })
      };
    case CLEAR_ARTIST_STATE:
      return initialArtistState;

    default:
      return state;
  }
}

//THUNK CREATORS

export const fetchAllArtists = (page = 1) => async dispatch => {
  try {
    const artists = await axios.get(`/api/artists/?page=${page}`);
    return dispatch(getArtists(artists.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchStateArtists = (state, page = 1) => async dispatch => {
  try {
    const artists = await axios.get(`/api/artists/state/${state}?page=${page}`);
    return dispatch(getStateArtists(artists.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchGenreArtists = (genre, page = 1) => async dispatch => {
  try {
    const artists = await axios.get(`/api/artists/genre/${genre}?page=${page}`);
    return dispatch(getGenreArtists(artists.data));
  } catch (err) {
    console.error(err);
  }
};

export const createNewArtist = artist => async dispatch => {
  try {
    const newCreatedArtist = await axios.post('/api/artists/admin', artist);
    return dispatch(newArtist(newCreatedArtist.data));
  } catch (err) {
    console.error(err);
  }
};

export const editCurrentArtist = (id, artist) => async dispatch => {
  try {
    const editedArtist = await axios.put(`/api/artists/admin/${id}`, artist);
    return dispatch(editArtist(editedArtist.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteCurrentArtist = id => async dispatch => {
  try {
    await axios.delete(`/api/artists/admin/${id}`);
    return dispatch(deleteArtist(id));
  } catch (err) {
    console.error(err);
  }
};

export const likeCurrentArtist = artist => async dispatch => {
  try {
    if (Object.keys(artist.user).length === 0) {
      return dispatch(addError({ error: 'Login To Upvote/Downvote Artist' }));
    }
    const likedArtist = await axios.post('/api/artists/like', artist);
    return dispatch(likeArtist(likedArtist.data[0]));
  } catch (err) {
    console.error(err);
  }
};

export const dislikeCurrentArtist = artist => async dispatch => {
  try {
    if (Object.keys(artist.user).length === 0) {
      return dispatch(addError({ error: 'Login To Upvote/Downvote Artist' }));
    }
    const dislikedArtist = await axios.post('/api/artists/dislike', artist);
    return dispatch(dislikeArtist(dislikedArtist.data[0]));
  } catch (err) {
    console.error(err);
  }
};
