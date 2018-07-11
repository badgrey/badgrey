import axios from 'axios'

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
    const newEmail = await axios.post('/api/send', info)
    return dispatch(sendEmail(newEmail.data));
  }
  catch (err) {
    console.log(err)
  }
}

