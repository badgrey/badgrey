import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CHAPTERS = 'GET_CHAPTERS';
const GET_SINGLE_CHAPTER = 'GET_SINGLE_CHAPTER';

/**
 * ACTION CREATORS
 */

const getChapters = chapters => ({
  type: GET_CHAPTERS,
  payload: chapters
});

const getSingleChapter = chapter => ({
  type: GET_SINGLE_CHAPTER,
  payload: chapter
});

/*
 * THUNKS
 */

export const loadChapters = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/bricks');
    return dispatch(getChapters(data));
  } catch (err) {
    console.error(err);
  }
};

export const loadSingleChapter = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/bricks/pages/${id}`);
    return dispatch(getSingleChapter(data));
  } catch (err) {
    console.error(err);
  }
};
//REDUCER

const initBricksState = {
  chapters: [],
  selectedChapter: {}
};

export default function reducer(state = initBricksState, action) {
  switch (action.type) {
    case GET_CHAPTERS:
      return {
        ...state,
        chapters: action.payload
      };
    case GET_SINGLE_CHAPTER:
      return {
        ...state,
        selectedChapter: action.payload
      };
    default:
      return state;
  }
}
