import axios from 'axios'
import { addError } from './error'

/**
 * ACTION TYPES
 */
const GET_BLOGS = 'GET_BLOGS'
const CREATE_NEW_BLOG = 'CREATE_NEW_BLOG'
const EDIT_BLOG = 'EDIT_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'
const LIKE_BLOG = 'LIKE_BLOG'
const DISLIKE_BLOG = 'DISLIKE_BLOG'

/**
 * ACTION CREATORS
 */

const getBlogs = blogs => ({
  type: GET_BLOGS,
  payload: blogs
})
const newBlog = blog => ({
  type: CREATE_NEW_BLOG,
  payload: blog
})
const editBlog = blog => ({
  type: EDIT_BLOG,
  payload: blog
})
const deleteBlog = (id, spotlight) => ({
  type: DELETE_BLOG,
  payload: {
    id,
    spotlight
  }
})
const likeBlog = blog => ({type: LIKE_BLOG, blog})
const dislikeBlog = blog => ({type: DISLIKE_BLOG, blog})

//REDUCER

const initialState = {
  blogs: [],
  spotlight: [],
  nonSpotlight: []
}
// eslint-disable-next-line complexity
export default function reducer (state = initialState, action){

  switch (action.type) {

    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload.blogs,
        spotlight: action.payload.spotlight,
        nonSpotlight: action.payload.nonSpotlight
      }
    case CREATE_NEW_BLOG:
      return action.payload.blog.spotlight ?
       {
        ...state,
        blogs: [action.payload.blog, ...state.blogs],
        spotlight: [action.payload.blog, ...state.nonSpotlight]
      }
      :
      {
        ...state,
        blogs: [action.payload.blog, ...state.blogs],
        nonSpotlight: [action.payload.blog, ...state.spotlight]
      }
    case EDIT_BLOG:
      return action.payload.blog.spotlight ?
      {
        ...state,
        blogs: state.blogs.map(blog => (
          action.payload.blog.id === blog.id ? action.blog : blog
        )),
        spotlight: state.spotlight.map(blog => (
          action.payload.blog.id === blog.id ? action.blog : blog
        ))
      }
      :
      {
        ...state,
        blogs: state.blogs.map(blog => (
          action.payload.blog.id === blog.id ? action.blog : blog
        )),
        spotlight: state.spotlight.map(blog => (
          action.payload.blog.id === blog.id ? action.blog : blog
        ))
      }

    case DELETE_BLOG:
      return action.payload.spotlight ?
      {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload.id),
        spotlight: state.spotlight.filter(blog => blog.id !== action.payload.id)
      }
      :
      {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload.id),
        nonSpotlight: state.nonSpotlight.filter(blog => blog.id !== action.payload.id)
      }
    case LIKE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map(blog => (
        action.blog.id === blog.id ? action.blog : blog
      ))
      }

    case DISLIKE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map(blog => (
        action.blog.id === blog.id ? action.blog : blog
      ))
      }
    default:
      return state
  }
}

//THUNK CREATORS

export const fetchBlogs = () => async (dispatch) => {
  try {
    let response = {
      blogs: [],
      spotlight: [],
      nonSpotlight: []
    }
    let { data } = await axios.get('/api/blog')
    data = data.sort((blogA, blogB) => {
      if (blogA.createdAt < blogB.createdAt) return 1
      if (blogA.createdAt > blogB.createdAt) return -1
      return 0
    })
    for (let i = 0; i < data.length; i++) {
      response.blogs.push(data[i])
      if (data[i].spotlight === true) {
        response.spotlight.push(data[i])
      } else {
        response.nonSpotlight.push(data[i])
      }
    }

    return dispatch(getBlogs(response));
  }
  catch (err) {
    console.error(err)
  }
}

export const createNewBlog = (blog) => async (dispatch) => {
  try {
    const newCreatedBlog = await axios.post('/api/blog', blog)
    return dispatch(newBlog(newCreatedBlog.data));
  }
  catch (err) {
    console.error(err)
  }
}

export const editCurrentBlog = (id, blog) => async (dispatch) => {
  try {
    const editedBlog = await axios.put(`/api/blog/edit/${id}`, blog)
    return dispatch(editBlog(editedBlog.data));
  }
  catch (err) {
    console.error(err)
  }
}

export const deleteCurrentBlog = (id, spotlight) => async (dispatch) => {
  try {
    const deletedBlog = await axios.delete(`/api/blog/delete/${id}`)
    return dispatch(deleteBlog(id, spotlight))
  }
  catch (err) {
    console.error(err)
  }
}

export const likeCurrentBlog = (blog) => async (dispatch) => {
  try {
    if (Object.keys(blog.user).length === 0) {
      return dispatch(addError({error: 'Login To Upvote/Downvote Blog'}))
    }
    const likedBlog = await axios.post('/api/blog/like', blog)
    return dispatch(likeBlog(likedBlog.data[0]))
  }
  catch (err) {
    console.error(err)
  }
}

export const dislikeCurrentBlog = (blog) => async (dispatch) => {
  try {
    if (Object.keys(blog.user).length === 0) {
      return dispatch(addError({error: 'Login To Upvote/Downvote Blog'}))
    }
    const dislikedBlog = await axios.post('/api/blog/dislike', blog)
    return dispatch(dislikeBlog(dislikedBlog.data[0]))
  }
  catch (err) {
    console.error(err)
  }
}
