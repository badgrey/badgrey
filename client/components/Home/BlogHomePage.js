import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.scss';

//component for three most recent blogs to be visible on homepage
const BlogHomePage = props => {
  if (!props.blogs.length) return null;
  return (
    <div className="blogsHomeContainer">
      <div className="blogsHomeDisplay">
        <div className="mainBlogHomeDiv">
          <Link to={`/allblogs/${props.spotlight.id}`}>
            <div className="mainBlogHome">
              <div className="mainBlogHomePic">
                <img src={props.spotlight.blogPic} />
              </div>
              <div className="mainBlogHomeInfo">
                <h1>{props.spotlight.title}</h1>
                <h2>By {props.spotlight.author}</h2>
                <h2>{props.spotlight.description}</h2>
                <h4>{props.spotlight.date}</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="singleBlogHomeDiv">
          {//above is the most recent blog the bottom maps out the other two
          props.blogs.map((blog, index) => {
            return (
              <Link
                className="singleBlogHomeLink"
                key={blog.id}
                to={`/allblogs/${blog.id}`}
              >
                <div className="singleBlogHome">
                  <div className="singleBlogHomeInfo">
                    <p className="singleBlogHomeTitle">{blog.title}</p>
                    <p className="noneOnMobile">By {blog.author}</p>
                    <p className="noneOnMobile">{blog.date}</p>
                  </div>
                  <img src={props.blogs[index].blogPic} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <Link to="/allBlogs">
          <button className="allBlogsButton">More</button>
        </Link>
      </div>
    </div>
  );
};

const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(BlogHomePage);
