import axios from 'axios'
import { addError } from './error'
import { isError } from 'util';
import { O_NOATIME } from 'constants';
import { DataPipeline } from 'aws-sdk';

/**
 * ACTION TYPES
 */
const GET_VOLUMES = 'GET_VOLUMES'
const GET_SINGLE_VOLUME = 'GET_SINGLE_VOLUME'
const GET_CHAPTER = 'GET_CHAPTER'

/**
 * ACTION CREATORS
 */

const getVolumes = volumes => ({
  type: GET_VOLUMES,
  payload: volumes
})

const getSingleVolume = volume => ({
  type: GET_SINGLE_VOLUME,
  payload: volume
})

const getChapter = chapter => ({
  type: GET_CHAPTER,
  payload: chapter
})

/*
* THUNKS
*/

export const loadVolumes = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/bricks')
    return dispatch(getVolumes(data));
  }
  catch (err) {
    console.error(err)
  }
}

export const loadSingleVolume = (id) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/bricks/volume/${id}`)
    return dispatch(getSingleVolume(data))
  } catch (err) {
    console.error(err)
  }
}

export const loadChapter = name => async dispatch => {
  try {
    const { data } = await axios.get(`/api/bricks/chapter/${name}`)
    return dispatch(getChapter(data))
  } catch (err) {
    console.error(err)
  }
}
//REDUCER

const initBricksState = {
  volumes: [],
  selectedVolume: {},
  chaopter: {}
}

export default function reducer (state = initBricksState, action){
  switch (action.type) {

    case GET_VOLUMES:
      return {
        ...state,
        volumes: action.payload
      }
    case GET_SINGLE_VOLUME:
      return {
        ...state,
        selectedVolume: action.payload
      }
    case GET_CHAPTER:
      return {
        ...state,
        chapter: action.payload
      }
    default:
      return state
  }
}

