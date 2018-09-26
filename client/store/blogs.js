import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_BLOGS = 'GET_BLOGS'
const CREATE_NEW_BLOG = 'CREATE_NEW_BLOG'
const EDIT_BLOG = 'EDIT_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'

/**
 * ACTION CREATORS
 */

const getBlogs = blogs => ({type: GET_BLOGS, blogs})
const newBlog = blog => ({type: CREATE_NEW_BLOG, blog})
const editBlog = blog => ({type: EDIT_BLOG, blog})
const deleteBlog = id => ({type: DELETE_BLOG, id})

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
      ));

    case DELETE_BLOG:
      return blogs.filter(blog => blog.id !== action.id)

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
    const editedBlog = await axios.put(`/api/blog/${id}`, blog)
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
