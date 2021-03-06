import axios from 'axios';
import { addError } from './error';

/**
 * ACTION TYPES
 */
const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';
const GET_STATE_ARTISTS = 'GET_STATE_ARTISTS';
const GET_GENRE_ARTISTS = 'GET_GENRE_ARTISTS';
const GET_CHOSEN_ARTIST = 'GET_CHOSEN_ARTIST';
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
const getChosenArtist = artist => ({
  type: GET_CHOSEN_ARTIST,
  payload: artist
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
  genreArtists: [],
  chosenArtist: {}
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
    case GET_CHOSEN_ARTIST:
      return {
        ...state,
        chosenArtist: action.payload
      };
    case CREATE_NEW_ARTIST:
      return {
        numArtists: 0,
        allArtists: [],
        numStateArtists: 0,
        stateArtists: [],
        numGenreArtists: 0,
        genreArtists: [],
        chosenArtist: action.payload
      };
    case EDIT_ARTIST:
      return {
        numArtists: 0,
        allArtists: [],
        numStateArtists: 0,
        stateArtists: [],
        numGenreArtists: 0,
        genreArtists: [],
        chosenArtist: action.payload
      };
    case DELETE_ARTIST:
      return initialArtistState;
    case LIKE_ARTIST:
      return {
        ...state,
        chosenArtist: action.payload
      };
    case DISLIKE_ARTIST:
      return {
        ...state,
        chosenArtist: action.payload
      };
    case CLEAR_ARTIST_STATE:
      return initialArtistState;

    default:
      return state;
  }
}

//THUNK CREATORS

export const fetchAllArtistsNoLimit = () => async dispatch => {
  try {
    const artists = await axios.get(`/api/artists/noLimit`);
    return dispatch(getArtists(artists.data));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const fetchAllArtists = (
  page = 1,
  searchValue = ''
) => async dispatch => {
  try {
    const artists = await axios.get(
      `/api/artists/?page=${page}&&search=${searchValue}`
    );

    return dispatch(getArtists(artists.data));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const fetchStateArtists = (
  state,
  page = 1,
  searchValue = ''
) => async dispatch => {
  try {
    const artists = await axios.get(
      `/api/artists/state/${state}?page=${page}&&search=${searchValue}`
    );
    return dispatch(getStateArtists(artists.data));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const fetchGenreArtists = (
  genre,
  page = 1,
  searchValue = ''
) => async dispatch => {
  try {
    const artists = await axios.get(
      `/api/artists/genre/${genre}?page=${page}&&search=${searchValue}`
    );
    return dispatch(getGenreArtists(artists.data));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const fetchChosenArtist = id => async (dispatch, getState) => {
  const artistState = getState().artists;
  const allArtists = artistState.allArtists;
  const genreArtists = artistState.genreArtists;
  const stateArtists = artistState.stateArtists;
  for (let i = 0; i < stateArtists.length; i++) {
    if (stateArtists[i].id === id) {
      return dispatch(getChosenArtist(stateArtists[i]));
    }
  }
  for (let i = 0; i < genreArtists.length; i++) {
    if (genreArtists[i].id === id) {
      return dispatch(getChosenArtist(genreArtists[i]));
    }
  }
  for (let i = 0; i < allArtists.length; i++) {
    if (allArtists[i].id === id) {
      return dispatch(getChosenArtist(allArtists[i]));
    }
  }
  try {
    const { data } = await axios.get(`/api/artists/artist/${id}`);
    return dispatch(getChosenArtist(data));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const createNewArtist = artist => async dispatch => {
  try {
    const newCreatedArtist = await axios.post('/api/artists/admin', artist);
    dispatch(newArtist(newCreatedArtist.data));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const editCurrentArtist = (id, artist) => async dispatch => {
  try {
    const editedArtist = await axios.put(`/api/artists/admin/${id}`, artist);
    return dispatch(editArtist(editedArtist.data));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const checkForDuplicateArtist = name => async dispatch => {
  try {
    const duplicateArtist = await axios.post(`/api/artists/duplicate/admin/`, {
      name
    });
    if (duplicateArtist.data.id) {
      dispatch(addError({ error: 'This Artists Already Exists!' }));
      throw new Error('Already Exists!');
    }
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};

export const deleteCurrentArtist = id => async dispatch => {
  try {
    await axios.delete(`/api/artists/admin/${id}`);
    return dispatch(deleteArtist(id));
  } catch (err) {
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
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
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
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
    dispatch(addError({ error: 'Something Went Wrong!' }));
    throw new Error(err);
  }
};
