import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_USERS = 'GET_ALL_USERS'
const EDIT_USER = 'EDIT_USER'
const DELETE_USER = 'DELETE_USER'


/**
 * ACTION CREATORS
 */

const getAllUsers = users => ({type: GET_ALL_USERS, users})
const editUser = user => ({type: EDIT_USER, user})
const deleteUser = id => ({type: DELETE_USER, id})


//REDUCER
export default function reducer (users = [], action){
  switch (action.type) {

    case GET_ALL_USERS:
      return action.users

    case EDIT_USER:
      return users.map(user => (
        action.user[1][0].id === user.id ? action.user[1][0] : user
      ));

    case DELETE_USER:
      return users.filter(user => user.id !== action.id)

    default:
      return users
  }
}

//THUNK CREATORS

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await axios.get('/api/users')
    return dispatch(getAllUsers(users.data));
  }
  catch (err) {
    console.error(err)
  }
}

export const editSingleUser = (id, user) => async (dispatch) => {
  try {
    const editedUser = await axios.put(`/api/users/${id}`, user)
    return dispatch(editUser(editedUser.data));
  }
  catch (err) {
    console.error(err)
  }
}

export const deleteCurrentUser = (id) => async (dispatch) => {
  try {
    const deletedUser = await axios.delete(`/api/users/delete/${id}`)
    return dispatch(deleteUser(id))
  }
  catch (err) {
    console.error(err)
  }
}
