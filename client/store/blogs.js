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

const getBlogs = blogs => ({type: GET_BLOGS, blogs})
const newBlog = blog => ({type: CREATE_NEW_BLOG, blog})
const editBlog = blog => ({type: EDIT_BLOG, blog})
const deleteBlog = id => ({type: DELETE_BLOG, id})
const likeBlog = blog => ({type: LIKE_BLOG, blog})
const dislikeBlog = blog => ({type: DISLIKE_BLOG, blog})

//REDUCER
export default function reducer (blogs = [], action){

  switch (action.type) {

    case GET_BLOGS:
      return action.blogs

    case CREATE_NEW_BLOG:
      return [...blogs, action.blog]

    case EDIT_BLOG:
      return blogs.map(blog => (
        action.blog.id === blog.id ? action.blog : blog
      ))

    case DELETE_BLOG:
      return blogs.filter(blog => blog.id !== action.id)

    case LIKE_BLOG:
      return blogs.map(blog => (
        action.blog.id === blog.id ? action.blog : blog
      ))

    case DISLIKE_BLOG:
      return blogs.map(blog => (
        action.blog.id === blog.id ? action.blog : blog
      ))

    default:
      return blogs
  }
}

//THUNK CREATORS

export const fetchBlogs = () => async (dispatch) => {
  try {
    const blogs = await axios.get('/api/blog')
    return dispatch(getBlogs(blogs.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const createNewBlog = (blog) => async (dispatch) => {
  try {
    const newCreatedBlog = await axios.post('/api/blog', blog)
    return dispatch(newBlog(newCreatedBlog.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const editCurrentBlog = (id, blog) => async (dispatch) => {
  try {
    const editedBlog = await axios.put(`/api/blog/edit/${id}`, blog)
    return dispatch(editBlog(editedBlog.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const deleteCurrentBlog = (id) => async (dispatch) => {
  try {
    const deletedBlog = await axios.delete(`/api/blog/delete/${id}`)
    return dispatch(deleteBlog(id))
  }
  catch (err) {
    console.log(err)
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
    console.log(err)
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
    console.log(err)
  }
}
