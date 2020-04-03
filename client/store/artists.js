import axios from 'axios';
import { addError } from './error';

/**
 * ACTION TYPES
 */
const GET_ARTISTS = 'GET_ARTISTS';
const CREATE_NEW_ARTIST = 'CREATE_NEW_ARTIST';
const EDIT_ARTIST = 'EDIT_ARTIST';
const DELETE_ARTIST = 'DELETE_ARTIST';
const LIKE_ARTIST = 'LIKE_ARTIST';
const DISLIKE_ARTIST = 'DISLIKE_ARTIST';

/**
 * ACTION CREATORS
 */

const getArtists = artists => ({ type: GET_ARTISTS, artists });
const newArtist = artist => ({ type: CREATE_NEW_ARTIST, artist });
const editArtist = artist => ({ type: EDIT_ARTIST, artist });
const deleteArtist = id => ({ type: DELETE_ARTIST, id });
const likeArtist = artist => ({ type: LIKE_ARTIST, artist });
const dislikeArtist = artist => ({ type: DISLIKE_ARTIST, artist });

//REDUCER
export default function reducer(artists = [], action) {
  switch (action.type) {
    case GET_ARTISTS:
      return action.artists;

    case CREATE_NEW_ARTIST:
      return [...artists, action.artist];

    case EDIT_ARTIST:
      return artists.map(artist => {
        if (action.artist.id === artist.id) {
          return action.artist;
        }
        return artist;
      });

    case DELETE_ARTIST:
      return artists.filter(artist => artist.id !== action.id);

    case LIKE_ARTIST:
      return artists.map(artist => {
        if (action.artist.id === artist.id) {
          return action.artist;
        }
        return artist;
      });

    case DISLIKE_ARTIST:
      return artists.map(artist => {
        if (action.artist.id === artist.id) {
          return action.artist;
        }
        return artist;
      });

    default:
      return artists;
  }
}

//THUNK CREATORS

export const fetchArtists = () => async dispatch => {
  try {
    const artists = await axios.get('/api/artists');
    return dispatch(getArtists(artists.data));
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
