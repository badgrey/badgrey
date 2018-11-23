import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORIGINAL_CONTENT = 'GET_ORIGINAL_CONTENT'
const CREATE_NEW_ORIGINAL_CONTENT = 'CREATE_NEW_ORIGINAL_CONTENT'
const DELETE_ORIGINAL_CONTENT = 'DELETE_ORIGINAL_CONTENT'
const LIKE_ORIGINAL_CONTENT = 'LIKE_ORIGINAL_CONTENT'
const DISLIKE_ORIGINAL_CONTENT = 'DISLIKE_ORIGINAL_CONTENT'

/**
 * ACTION CREATORS
 */

const getOriginalContent = ocs => ({type: GET_ORIGINAL_CONTENT, ocs})
const newOriginalContent = oc => ({type: CREATE_NEW_ORIGINAL_CONTENT, oc})
const deleteOriginalContent = id => ({type: DELETE_ORIGINAL_CONTENT, id})
const likeOriginalContent = oc => ({type: LIKE_ORIGINAL_CONTENT, oc})
const dislikeOriginalContent = oc => ({type: DISLIKE_ORIGINAL_CONTENT, oc})

//REDUCER
export default function reducer (ocs = [], action){

  switch (action.type) {

    case GET_ORIGINAL_CONTENT:
      return action.ocs

    case CREATE_NEW_ORIGINAL_CONTENT:
      return [...ocs, action.oc]

    case DELETE_ORIGINAL_CONTENT:
      return ocs.filter(oc => oc.id !== action.id)

    case LIKE_ORIGINAL_CONTENT:
      return ocs.map(oc => (
        action.oc.id === oc.id ? action.oc : oc
      ))

    case DISLIKE_ORIGINAL_CONTENT:
      return ocs.map(oc => (
        action.oc.id === oc.id ? action.oc : oc
      ))

    default:
      return ocs
  }
}

//THUNK CREATORS

export const fetchOriginalContent = () => async (dispatch) => {
  try {
    const ocs = await axios.get('/api/originalcontent')
    return dispatch(getOriginalContent(ocs.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const createNewOriginalContent = (oc) => async (dispatch) => {
  try {
    const newCreatedOriginalContent = await axios.post('/api/orignalcontent/admin', oc)
    return dispatch(newOriginalContent(newCreatedOriginalContent.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteCurrentOriginalContent = (id) => async (dispatch) => {
  try {
    const deletedOriginalContent = await axios.delete(`/api/originalcontent/delete/${id}`)
    return dispatch(deleteOriginalContent(id))
  }
  catch (err) {
    console.log(err)
  }
}

export const likeCurrentOriginalContent = (oc) => async (dispatch) => {
  try {
    const likedOc = await axios.post('/api/originalcontent/like', oc)
    return dispatch(likeOriginalContent(likedOc.data[0]))
  }
  catch (err) {
    console.log(err)
  }
}

export const dislikeCurrentOriginalContent = (oc) => async (dispatch) => {
  try {
    const dislikedOc = await axios.post('/api/originalcontent/dislike', oc)
    return dispatch(dislikeOriginalContent(dislikedOc.data[0]))
  }
  catch (err) {
    console.log(err)
  }
}
