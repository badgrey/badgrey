import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_COMMENTS = 'GET_COMMENTS'
const CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

/**
 * ACTION CREATORS
 */

const getComments = comments => ({type: GET_COMMENTS, comments})
const newComment = comment => ({type: CREATE_NEW_COMMENT, comment})
const editComment = comment => ({type: EDIT_COMMENT, comment})
const deleteComment = id => ({type: DELETE_COMMENT, id})

//REDUCER
export default function reducer (comments = [], action){

  switch (action.type) {

    case GET_COMMENTS:
      return action.comments

    case CREATE_NEW_COMMENT:
      return [...comments, action.comment]

    case EDIT_COMMENT:
      return comments.map(comment => (
        action.comment.id === comment.id ? action.comment : comment
      ));

    case DELETE_COMMENT:
      return comments.filter(comment => comment.id !== action.id)

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

export const createNewComment = (comment) => async (dispatch) => {
  try {
    const newCreatedComment = await axios.post('/api/comment', comment)
    return dispatch(newComment(newCreatedComment.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const editCurrentComment = (id, comment) => async (dispatch) => {
  try {
    const editedComment = await axios.put(`/api/comment/edit/${id}`, comment)
    return dispatch(editComment(editedComment.data));
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
