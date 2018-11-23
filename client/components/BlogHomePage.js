import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const BlogHomePage = (props) => (
  !props.blogs.length ? null :
  <div className="blogsHomeContainer">
    <div className="blogsDisplay">
      <div className="mainBlogDiv">
        <Link className="mainBlogLink" to={`/allblogs/${props.blogs[0].id}`}>
          <div className="mainBlog">
            <div className="mainBlogPic">
              <img src={require(`../../public/images/blogs/${props.blogs[0].blogPic}.jpg`)} />
            </div>
            <div className="mainBlogInfo">
              <h1>{props.blogs[0].title}</h1>
              <h2>{props.blogs[0].author}</h2>
              <h3>{props.blogs[0].description}</h3>
              <h4>{props.blogs[0].date}</h4>
            </div>
          </div>
        </Link>
      </div>
      <div className="singleBlogDiv">
      {
        props.blogs.map((blog, index) => {
          return (
            index === 0 ? null :
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
