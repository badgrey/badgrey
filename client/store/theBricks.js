import axios from 'axios'
import { addError } from './error'

/**
 * ACTION TYPES
 */
const GET_VOLUMES = 'GET_VOLUMES'


/**
 * ACTION CREATORS
 */

const getVolumes = volumes => ({
  type: GET_VOLUMES,
  payload: volumes
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

//REDUCER

const initBricksState = {
  volumes: []
}

export default function reducer (state = initBricksState, action){
  switch (action.type) {

    case GET_VOLUMES:
      return {
        ...state,
        volumes: action.payload
      }

    default:
      return state
  }
}

