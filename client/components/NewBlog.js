import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewBlog } from '../store'

export class NewBlog extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  componentDidMount () {
    if (!this.props.isBlogger) {
      this.props.history.push('/')
    }
  }

  submit(event) {
    event.preventDefault();
    let blogInfo = {
      blogInfo: {
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
        blogPic: event.target.blogPic.value,
        blogPost: event.target.blogPost.value,
        date: new Date(),
      },
      user: this.props.user.id,
      artist:
  }
    this.props.submitForm(blogInfo)
    this.props.history.push(`/allblogs/`)
  }

  render() {
    return (
      <div className="outerForm">
      <form className="form" id="newArtistForm" onSubmit={this.submit} >
        <div>
          <label>Title</label>
          <input name="title" type="text" required placeholder="Title" className="formInput" />
        </div>
        <div>
          <label>Author</label>
          <input name="author" type="text" required placeholder="Author" />
        </div>
        <div>
        <div>
          <label>Description</label>
          <input name="description" type="text" required placeholder="Description" />
        </div>
        <div>
          <label>Image File Name</label>
          <input name="blogPic" type="text" required placeholder="NAME.jpg" />
        </div>
        <div>
          <label>Artist</label>
          <input />
        </div>
        <div>
          <label>Blog Post</label>
          <textarea name="blogPost" required placeholder="Post" />
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
}

const mapState = (state) => {
  return {
    blogs: state.blogs,
    isBlogger: state.user.isBlogger,
    user: state.user,
    artists: state.artists
  }
}

const mapDispatch = dispatch => ({
  submitForm(blog){
    dispatch(createNewBlog(blog))
  }
});

export default connect(mapState, mapDispatch)(NewBlog);
