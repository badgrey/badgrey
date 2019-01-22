import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editCurrentBlog} from '../store'

export class EditBlog extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  //if you are not a blogger you get redirected
  componentDidMount () {
    if (!this.props.isBlogger) {
      this.props.history.push('/')
    }
  }

  //submit all info to backend to edit blog
  submit(event) {
    event.preventDefault();
    let blogInfo = {
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
        blogPic: event.target.blogPic.value,
        blogPost: event.target.blogPost.value,
      }
    this.props.submitForm(this.props.chosenBlog[0].id, blogInfo)
    this.props.history.push(`/allblogs/${this.props.chosenBlog[0].id}`)
  }

  render() {
    return (
      <div className="outerForm">
      <form className="form" id="newArtistForm" onSubmit={this.submit} >
        <div>
          <label>Blog Name</label>
          <input name="title" type="text" className="formInput" defaultValue={this.props.chosenBlog[0].title} />
        </div>
        <div>
          <label>Author</label>
          <input name="author" type="text" required defaultValue={this.props.chosenBlog[0].author} />
        </div>
        <div>
          <div>
            <label>Description</label>
            <input name="description" type="text" required defaultValue={this.props.chosenBlog[0].description} />
          </div>
          <div>
            <label>Image File Name</label>
            <input name="blogPic" type="text" required defaultValue={this.props.chosenBlog[0].blogPic} />
          </div>
          <div>
            <label>Blog Post</label>
            <textarea name="blogPost" defaultValue={this.props.chosenBlog[0].blogPost} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
}

//chosen blog gotten from route
const mapState = ({blogs, user}, ownProps) => {
  return {
    chosenBlog: blogs.filter((blog) => {
      return '' + blog.id === ownProps.match.params.id
    }),
    blogs,
    user,
    isAdmin: user.isAdmin,
    isBlogger: user.isBlogger
  }
}

const mapDispatch = dispatch => ({
  submitForm(id, blog){
    dispatch(editCurrentBlog(id, blog))
  }
});

export default connect(mapState, mapDispatch)(EditBlog);
