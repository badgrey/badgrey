import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../public/style.scss';
import { fetchArtists, fetchSavedArtists, fetchBlogs } from '../store';
import LazyLoad from 'react-lazyload';

export class AllBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCheck: true,
      search: ''
    };
    this.saved = this.saved.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  //see All artists componenet for comments regarding lines 18-40
  componentDidMount() {
    window.scroll(0, 0);
    if (this.props.artists === []) {
      this.props.loadInitialData();
    }
  }

  componentDidUpdate() {
    this.saved();
  }

  saved() {
    if (
      this.props.isLoggedIn &&
      this.props.savedArtists.length === 0 &&
      this.state.savedCheck
    ) {
      this.props.fetchSaved();
      this.setState({ savedCheck: false });
    }
  }

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  render() {
    const blogs = this.props.blogs.filter(blog =>
      blog.artist.name.toLowerCase().startsWith(this.state.search.toLowerCase())
    );
    return (
      <div className="allBlogsDiv">
        <h1 className="allBlogsh1">ALL</h1>
        <h6 className="scrolltoload">Scroll to Load More</h6>
        <div className="artistSearch">
          <form>
            <label className="searchLabel">Search Artist</label>
            <input onChange={this.handleSearch} placeholder="Name" />
          </form>
        </div>
        <div className="blogsList">
          {blogs.map(blog => {
            //mapping over all blogs and creating links to individual blog pages
            return (
              <LazyLoad key={blog.id} height={200}>
                <Link className="allSingleBlogLink" to={`/allblogs/${blog.id}`}>
                  <div className="homeSingleBlog">
                    <div className="singleBlogInfo">
                      <p className="singleBlogTitle">{blog.title}</p>
                      <p className="noneOnMobile">By {blog.author}</p>
                      <p className="noneOnMobile">{blog.date}</p>
                    </div>
                    <img src={blog.blogPic} />
                  </div>
                </Link>
              </LazyLoad>
            );
          })}
        </div>
      </div>
    );
  }
}

//putting artists and blogs sorted alphabetically saved artists and user on props
const mapState = ({ artists, blogs, user, savedArtists }) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1;
      if (artistA.name > artistB.name) return 1;
      return 0;
    }),
    isLoggedIn: !!user.id,
    user,
    savedArtists,
    blogs: blogs.blogs
  };
};
//putting load initial data and fetch saved on props
const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchArtists());
      dispatch(fetchBlogs());
    },
    fetchSaved() {
      dispatch(fetchSavedArtists());
    }
  };
};

export default connect(mapState, mapDispatch)(AllBlogs);
