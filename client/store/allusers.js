import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_USERS = 'GET_ALL_USERS'


/**
 * ACTION CREATORS
 */

const getAllUsers = users => ({type: GET_ALL_USERS, users})


//REDUCER
export default function reducer (users = [], action){

  switch (action.type) {

    case GET_ALL_USERS:
      return action.users
    default:
      return users
  }
}

//THUNK CREATORS

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await axios.get('/api/users')
    console.log(users.data)
    return dispatch(getAllUsers(users.data));
  }
  catch (err) {
    console.log(err)
  }
}
