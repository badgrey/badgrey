import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../public/styles/index.scss';
import { fetchAllBlogs, fetchSavedArtists } from '../../store';
import LazyLoad from 'react-lazyload';
import { Pagination, Search } from '../';

export class AllBlogs extends Component {
  state = {
    savedCheck: true,
    search: '',
    currentPage: 1
  };

  //see All artists componenet for comments regarding lines 18-40
  componentDidMount() {
    window.scroll(0, 0);
    if (this.props.blogs.length === 0) {
      this.props.fetchAllBlogs();
    }
  }

  componentDidUpdate() {
    this.saved();
  }
  async componentWillUnmount() {
    if (this.state.currentPage !== 1 || this.state.search !== '') {
      await this.props.fetchAllBlogs();
    }
  }

  saved = () => {
    if (
      this.props.isLoggedIn &&
      this.props.savedArtists.length === 0 &&
      this.state.savedCheck
    ) {
      this.props.fetchSaved();
      this.setState({ savedCheck: false });
    }
  };
  incrementPage = async () => {
    try {
      await this.props.fetchAllBlogs(
        this.state.currentPage + 1,
        this.state.search
      );
      this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };
  decrementPage = async () => {
    try {
      await this.props.fetchAllBlogs(
        this.state.currentPage - 1,
        this.state.search
      );
      this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };

  jumpToPage = async page => {
    try {
      await this.props.fetchAllBlogs(page, this.state.search);
      this.setState({ currentPage: page });
      window.scroll(0, 0);
    } catch (err) {
      console.error(err);
    }
  };

  searchForBlogs = async evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    await this.props.fetchAllBlogs(1, name);
    this.setState({ search: name });
  };

  render() {
    return (
      <div className="allBlogsDiv">
        <h1 className="allBlogsh1">ALL</h1>
        <Search
          onSubmit={this.searchForBlogs}
          label={'Search Blogs'}
          placeholder={'Title'}
        />
        <div className="blogsList">
          {this.props.blogs.map(blog => {
            //mapping over all blogs and creating links to individual blog pages
            return (
              <LazyLoad key={blog.id} height={200}>
                <Link className="allSingleBlogLink" to={`/allblogs/${blog.id}`}>
                  <div className="allSingleBlog">
                    <div className="allSingleBlogInfo">
                      <p className="allSingleBlogTitle">{blog.title}</p>
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
        {new Array(Math.ceil(this.props.numBlogs / 10)).length > 1 && (
          <Pagination
            totalPages={new Array(Math.ceil(this.props.numBlogs / 10)).fill(
              null
            )}
            currentPage={this.state.currentPage}
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            jumpToPage={this.jumpToPage}
          />
        )}
      </div>
    );
  }
}

//putting artists and blogs sorted alphabetically saved artists and user on props
const mapState = ({ user, blogs, savedArtists }) => ({
  isLoggedIn: !!user.id,
  user,
  savedArtists,
  blogs: blogs.blogs,
  numBlogs: blogs.numBlogs
});

const mapDispatch = dispatch => ({
  fetchAllBlogs: (page, search) => dispatch(fetchAllBlogs(page, search)),
  fetchSaved: () => dispatch(fetchSavedArtists())
});

export default connect(mapState, mapDispatch)(AllBlogs);
