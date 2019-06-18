import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_INTERVIEWS = 'GET_INTERVIEWS'
const CREATE_NEW_INTERVIEW = 'CREATE_NEW_INTERVIEW'
const DELETE_INTERVIEW = 'DELETE_INTERVIEW'
const LIKE_INTERVIEW = 'LIKE_INTERVIEW'
const DISLIKE_INTERVIEW = 'DISLIKE_INTERVIEW'

/**
 * ACTION CREATORS
 */

const getInterviews = interviews => ({type: GET_INTERVIEWS, interviews})
const newInterview = interview => ({type: CREATE_NEW_INTERVIEW, interview})
const deleteInterview = id => ({type: DELETE_INTERVIEW, id})
const likeInterview = interview => ({type: LIKE_INTERVIEW, interview})
const dislikeInterview = interview => ({type: DISLIKE_INTERVIEW, interview})

//REDUCER
export default function reducer (interviews = [], action){

  switch (action.type) {

    case GET_INTERVIEWS:
      return action.interviews

    case CREATE_NEW_INTERVIEW:
      return [...interviews, action.interview]

    case DELETE_INTERVIEW:
      return interviews.filter(interview => interview.id !== action.id)

    case LIKE_INTERVIEW:
      return interviews.map(interview => (
        action.interview.id === interview.id ? action.interview : interview
      ))

    case DISLIKE_INTERVIEW:
      return interviews.map(interview => (
        action.interview.id === interview.id ? action.interview : interview
      ))

    default:
      return interviews
  }
}

//THUNK CREATORS

export const fetchInterviews = () => async (dispatch) => {
  try {
    let { data } = await axios.get('/api/interview')
    data = data.sort((interviewA, interviewB) => {
      if (interviewA.createdAt < interviewB.createdAt) return 1
      if (interviewA.createdAt > interviewB.createdAt) return -1
      return 0
    })
    return dispatch(getInterviews(data));
  }
  catch (err) {
    console.log(err)
  }
}

export const createNewInterview = (interview) => async (dispatch) => {
  try {
    const newCreatedInterview = await axios.post('/api/interview/admin', interview)
    return dispatch(newInterview(newCreatedInterview.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteCurrentInterview = (id) => async (dispatch) => {
  try {
    const deletedInterview = await axios.delete(`/api/interview/admin/${id}`)
    return dispatch(deleteInterview(id))
  }
  catch (err) {
    console.log(err)
  }
}

export const likeCurrentInterview = (interview) => async (dispatch) => {
  try {
    const likedInterview = await axios.post('/api/interview/like', interview)
    return dispatch(likeInterview(likedInterview.data[0]))
  }
  catch (err) {
    console.log(err)
  }
}

export const dislikeCurrentInterview = (interview) => async (dispatch) => {
  try {
    const dislikedInterview = await axios.post('/api/interview/dislike', interview)
    return dispatch(dislikeInterview(dislikedInterview.data[0]))
  }
  catch (err) {
    console.log(err)
  }
}
