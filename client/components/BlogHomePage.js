import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//component for three most recent blogs to be visible on homepage
const BlogHomePage = (props) => (
  !props.blogs.length ? null :
  <div className="blogsHomeContainer">
    <div className="blogsDisplay">
      <div className="mainBlogDiv">
        <Link className="mainBlogLink" to={`/allblogs/${props.blogs[0].id}`}>
          <div className="mainBlog">
            <div className="mainBlogPic">
              <img src={props.blogs[0].blogPic} />
            </div>
            <div className="mainBlogInfo">
              <h1>{props.blogs[0].title}</h1>
              <h2>By {props.blogs[0].author}</h2>
              <h4>{props.blogs[0].date}</h4>
            </div>
          </div>
        </Link>
      </div>
      <div className="singleBlogDiv">
      {
        //above is the most recent blog the bottom maps out the other two
        props.blogs.map((blog, index) => {
          return (
            index === 0 ? null :
            <Link className="homeSingleBlogLink" key={blog.id} to={`/allblogs/${blog.id}`}>
              <div className="homeSingleBlog">
                <div className="singleBlogInfo">
                  <p className="singleBlogTitle">{blog.title}</p>
                  <p className="noneOnMobile">By {blog.author}</p>
                  <p className="noneOnMobile">{blog.date}</p>
                </div>
                <img src={props.blogs[index].blogPic} />
              </div>
            </Link>
          )
        })
      }
    </div>
    </div>
    <div>
      <Link to="/allBlogs">
        <button className="allBlogsButton">More</button>
      </Link>
    </div>
  </div>
)

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(BlogHomePage)
