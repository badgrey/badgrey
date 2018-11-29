import axios from 'axios'
import {addError} from './error'

/**
 * ACTION TYPES
 */
const GET_COMMENTS = 'GET_COMMENTS'
const CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const LIKE_COMMENT = 'LIKE_COMMENT'
const DISLIKE_COMMENT = 'DISLIKE_COMMENT'

/**
 * ACTION CREATORS
 */

const getComments = comments => ({type: GET_COMMENTS, comments})
const newComment = comment => ({type: CREATE_NEW_COMMENT, comment})
const deleteComment = id => ({type: DELETE_COMMENT, id})
const likeComment = comment => ({type: LIKE_COMMENT, comment})
const dislikeComment = comment => ({type: DISLIKE_COMMENT, comment})


//REDUCER
export default function reducer (comments = [], action){

  switch (action.type) {

    case GET_COMMENTS:
      return action.comments

    case CREATE_NEW_COMMENT:
      return [...comments, action.comment]

    case DELETE_COMMENT:
      return comments.filter(comment => comment.id !== action.id)

    case LIKE_COMMENT:
      return comments.map(comment => (
         action.comment.id === comment.id ? action.comment : comment
      ));

    case DISLIKE_COMMENT:
      return comments.map(comment => (
         action.comment.id === comment.id ? action.comment : comment
      ));

    default:
      return comments
  }
}

//THUNK CREATORS

export const fetchComments = (id) => async (dispatch) => {
  try {
    const comments = await axios.get(`/api/comment/blog/${id}`)
    return dispatch(getComments(comments.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const fetchArtistComments = (id) => async (dispatch) => {
  try {
    const comments = await axios.get(`/api/comment/artist/${id}`)
    return dispatch(getComments(comments.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const fetchInterviewComments = (id) => async (dispatch) => {
  try {
    const comments = await axios.get(`/api/comment/interview/${id}`)
    return dispatch(getComments(comments.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const createNewComment = (comment) => async (dispatch) => {
  try {
    if (Object.keys(comment.user).length === 0) {
      console.log('HERE!')
      return dispatch(addError({error: 'Login To Comment'}))
    }

    const newCreatedComment = await axios.post('/api/comment', comment)
    return dispatch(newComment(newCreatedComment.data[0]));
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteCurrentComment = (id) => async (dispatch) => {
  try {
    const deletedComment = await axios.delete(`/api/comment/delete/${id}`)
    return dispatch(deleteComment(id))
  }
  catch (err) {
    console.log(err)
  }
}

export const likeCurrentComment = (comment) => async (dispatch) => {
  try {
    const likedComment = await axios.post('/api/comment/like', comment)
    return dispatch(likeComment(likedComment.data[0]))
  }
  catch (err) {
    console.log(err)
  }
}

export const dislikeCurrentComment = (comment) => async (dispatch) => {
  try {
    const dislikedComment = await axios.post('/api/comment/dislike', comment)
    return dispatch(dislikeComment(dislikedComment.data[0]))
  }
  catch (err) {
    console.log(err)
  }
}
