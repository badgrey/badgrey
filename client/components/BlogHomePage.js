import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const BlogHomePage = (props) => (
  <div className="blogsHomeContainer">
    <h1>Blogs</h1>
    <div className="blogsDisplay">
    {
      props.blogs.map((blog) => {
        return (
          <Link className="singleBlogLink" key={blog.id} to={`/allblogs/${blog.id}`}>
            <div className="singleBlog">
              <h1>{blog.title}</h1>
              <h2>{blog.author}</h2>
              <h3>{blog.description}</h3>
              <h4>{blog.date}</h4>
            </div>
          </Link>
        )
      })
    }
    </div>
    <div>
      <Link to="/allBlogs">
        <button className="allBlogsButton">All Blogs</button>
      </Link>
    </div>
  </div>
)

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(BlogHomePage)
