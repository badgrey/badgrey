import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_LIKES = 'GET_LIKES'
const LIKE_COMMENT = 'LIKE_COMMENT'


/**
 * ACTION CREATORS
 */

const getLikes = likes => ({type: GET_LIKES, likes})
const newLike = like => ({type: LIKE_COMMENT, like})


//REDUCER
export default function reducer (likes = [], action){

  switch (action.type) {

    case GET_LIKES:
      return action.likes

    case LIKE_COMMENT:
      return [...likes, action.like]

    default:
      return likes
  }
}

//THUNK CREATORS

export const fetchLikes = (comment) => async (dispatch) => {
  try {
    console.log(comment)
    const likes = await axios.get('/api/comment/likes', comment)
    return dispatch(getLikes(likes.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const likeNewComment = (comment) => async (dispatch) => {
  try {
    const newCreatedLike = await axios.post('/api/comment', comment)
    return dispatch(newLike(newCreatedLike.data));
  }
  catch (err) {
    console.log(err)
  }
}

