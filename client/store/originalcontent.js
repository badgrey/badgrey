import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_FEATURED_CONTENT = 'GET_FEATURED_CONTENT';
const GET_MUSIC_VIDEOS = 'GET_MUSIC_VIDEOS';
const GET_CITY_SOUNDS = 'GET_CITY_SOUNDS';
const CREATE_NEW_ORIGINAL_CONTENT = 'CREATE_NEW_ORIGINAL_CONTENT';
const DELETE_ORIGINAL_CONTENT = 'DELETE_ORIGINAL_CONTENT';
const LIKE_ORIGINAL_CONTENT = 'LIKE_ORIGINAL_CONTENT';
const DISLIKE_ORIGINAL_CONTENT = 'DISLIKE_ORIGINAL_CONTENT';

/**
 * ACTION CREATORS
 */

const getFeaturedContent = content => ({
  type: GET_FEATURED_CONTENT,
  payload: content
});
const getMusicVideos = ocs => ({ type: GET_MUSIC_VIDEOS, payload: ocs });
const getCitySounds = ocs => ({ type: GET_CITY_SOUNDS, payload: ocs });
const newOriginalContent = oc => ({
  type: CREATE_NEW_ORIGINAL_CONTENT,
  payload: oc
});
const deleteOriginalContent = id => ({
  type: DELETE_ORIGINAL_CONTENT,
  payload: id
});
const likeOriginalContent = oc => ({
  type: LIKE_ORIGINAL_CONTENT,
  payload: oc
});
const dislikeOriginalContent = oc => ({
  type: DISLIKE_ORIGINAL_CONTENT,
  payload: oc
});

const initialOCState = {
  featuredContent: [],
  musicVideos: [],
  citySounds: []
};
//REDUCER
export default function reducer(state = initialOCState, action) {
  switch (action.type) {
    case GET_FEATURED_CONTENT:
      return {
        ...state,
        featuredContent: action.payload
      };
    case GET_MUSIC_VIDEOS:
      return {
        ...state,
        musicVideos: action.payload
      };
    case GET_CITY_SOUNDS:
      return {
        ...state,
        citySounds: action.payload
      };
    case CREATE_NEW_ORIGINAL_CONTENT:
      return {
        featuredContent: [
          action.payload,
          ...state.featuredContent.slice(0, -1)
        ],
        musicVideos:
          action.payload.type === 'MusicVideo'
            ? [...state.musicVideos, action.payload]
            : state.musicVideos,
        citySounds:
          action.payload.type === 'CitySounds'
            ? [...state.citySounds, action.payload]
            : state.citySounds
      };
    case DELETE_ORIGINAL_CONTENT:
      return {
        featuredContent: state.featuredContent.filter(
          oc => oc.id !== action.payload
        ),
        musicVideos: state.musicVideos.filter(oc => oc.id !== action.payload),
        citySounds: state.citySounds.filter(oc => oc.id !== action.payload)
      };
    case LIKE_ORIGINAL_CONTENT:
      return {
        musicVideos: state.musicVideos.map(oc => {
          return action.payload.id === oc.id ? action.payload : oc;
        }),
        citySounds: state.citySounds.map(oc =>
          action.payload.id === oc.id ? action.payload : oc
        )
      };
    case DISLIKE_ORIGINAL_CONTENT:
      return {
        musicVideos: state.musicVideos.map(oc =>
          action.payload.id === oc.id ? action.payload : oc
        ),
        citySounds: state.citySounds.map(oc =>
          action.payload.id === oc.id ? action.payload : oc
        )
      };
    default:
      return state;
  }
}

//THUNK CREATORS

export const fetchFeaturedContent = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/originalcontent/');
    return dispatch(getFeaturedContent(data));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchMusicVideos = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/originalcontent/MusicVideo`);
    return dispatch(getMusicVideos(data));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchCitySounds = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/originalcontent/CitySounds`);
    return dispatch(getCitySounds(data));
  } catch (err) {
    throw new Error(err);
  }
};

export const createNewOriginalContent = oc => async dispatch => {
  try {
    const newCreatedOriginalContent = await axios.post(
      '/api/originalcontent/admin',
      oc
    );
    return dispatch(newOriginalContent(newCreatedOriginalContent.data[0]));
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteCurrentOriginalContent = id => async dispatch => {
  try {
    await axios.delete(`/api/originalcontent/delete/${id}`);
    return dispatch(deleteOriginalContent(id));
  } catch (err) {
    throw new Error(err);
  }
};

export const likeCurrentOriginalContent = oc => async dispatch => {
  try {
    const likedOc = await axios.post('/api/originalcontent/like', oc);
    return dispatch(likeOriginalContent(likedOc.data[0]));
  } catch (err) {
    throw new Error(err);
  }
};

export const dislikeCurrentOriginalContent = oc => async dispatch => {
  try {
    const dislikedOc = await axios.post('/api/originalcontent/dislike', oc);
    return dispatch(dislikeOriginalContent(dislikedOc.data[0]));
  } catch (err) {
    throw new Error(err);
  }
};
