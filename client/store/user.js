import axios from 'axios'
import history from '../history'
import {addError} from './error'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const EDIT_USER = 'EDIT_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const editUser = user => ({type: EDIT_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(error => dispatch(addError({error: error})))

export const auth = (username, email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { username, email, password })
      .then(res => {
        dispatch(getUser(res.data))
        history.push('/')
      })
      .catch(error => dispatch(addError({error: error})))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

export const editCurrentUser = (id, user) =>
async (dispatch) => {
  try {
    const updatedUser = await axios.put(`/api/users/${id}`, user)
    dispatch(editUser(updatedUser.data))
    return updatedUser;
  }
  catch (err) {
    console.log(err)
  }
}

export const updateUserPassword = (userId, newpw) => dispatch => {
  axios.put(`/auth/${userId}/resetpw`, {password: newpw, pendingPwReset: false})
  .then((res) => {
    dispatch(editUser(res.data))
    history.push('/')
  })
  .catch(err => console.error(err));
}

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case EDIT_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
