const ADD_ERROR = 'ADD_ERROR'
const DELETE_ERROR = 'DELETE_ERROR'

export const addError = error => ({type: ADD_ERROR, error})
export const deleteError = error => ({type: DELETE_ERROR, error})

export default function errorReducer(error = {}, action) {
  switch (action.type) {
    case ADD_ERROR:
      return { ...error, error: action.error}
    case DELETE_ERROR:
      return {}
    default:
    return error
  }
}
