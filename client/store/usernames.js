import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USERNAMES = 'GET_USERNAMES'


/**
 * ACTION CREATORS
 */

const getUsernames = usernames => ({type: GET_USERNAMES, usernames})


//REDUCER
export default function reducer (usernames = [], action){

  switch (action.type) {

    case GET_USERNAMES:
      return action.usernames
    default:
      return usernames
  }
}

//THUNK CREATORS

export const fetchUsernames = () => async (dispatch) => {
  try {
    const usernames = await axios.get('/api/users/username')
    return dispatch(getUsernames(usernames.data));
  }
  catch (err) {
    console.log(err)
  }
}

