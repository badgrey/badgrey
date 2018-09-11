import axios from 'axios'
import {addError} from './error'


/**
 * ACTION TYPES
 */
const SEND_EMAIL = 'SEND_EMAIL'

/**
 * ACTION CREATORS
 */

const sendEmail = email => ({type: SEND_EMAIL, email})

//REDUCER
export default function reducer (email = {}, action){

  switch (action.type) {

    case SEND_EMAIL:
      return action.email

    default:
      return email
  }
}

//THUNK CREATORS

export const sendConfirmEmail = (info) => async (dispatch) => {
  try {
    const username = await axios.get(`/api/users/username/${info.username}`)
    const validEmail = await axios.get(`api/users/email/${info.email}`)
    if (username.data.length > 0) {
      return dispatch(addError({error: 'Username Taken'}))
    }
    if (validEmail.data.length > 0) {
      return dispatch(addError({error: 'Email Already In Use'}))
    }
      const newEmail = await axios.post('/api/send', info)
      return dispatch(sendEmail(newEmail.data));
  }
  catch (err) {
    console.log(err)
  }
}
