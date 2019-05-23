import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editCurrentBlog} from '../store'
import axios from 'axios'

export class EditBlog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      changePic: false,
      file: null
    }
    this.submit = this.submit.bind(this)
  }

  //if you are not a blogger you get redirected
  componentDidMount () {
    if (!this.props.isBlogger) {
      this.props.history.push('/')
    }
  }

  handleChange = () => {
    this.setState({changePic: !this.state.changePic})
  }

  //changes state to file name
  handleFileUpload = (event) => {
    this.setState({file: event.target.files})
  }

  //submit all info to backend to edit blog
  async submit(event) {
    event.preventDefault();
    let title = event.target.title.value
    let author = event.target.author.value
    let description = event.target.description.value
    let blogPost = event.target.blogPost.value
    let spotifyURL = event.target.spotify.value
    let spotlight = event.target.spotlight.value === 'No' ? false : true
    let blogInfo
    let picture

    if (this.state.changePic) {

      await axios.post('/api/deleteBlogPicture', {name: this.props.chosenBlog[0].fileKey})
      const formData = new FormData();
      formData.append('file', this.state.file[0])
      picture = await axios.post('/api/uploadBlogPicture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      let key = picture.data.Location.split('/')
      blogInfo = {
        title,
        author,
        description,
        blogPic: picture.data.Location,
        blogPost,
        spotifyURL,
        fileKey: key[key.length - 1],
        spotlight
      }
    } else {
      blogInfo = {
          title,
          author,
          description,
          spotifyURL,
          blogPic: this.props.chosenBlog[0].blogPic,
          blogPost,
          fileKey: this.props.chosenBlog[0].fileKey,
          spotlight
        }

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
            <label>Spotify URL</label>
            <input name="spotify" type="text" required defaultValue={this.props.chosenBlog[0].spotifyURL} />
          </div>
          {
            !this.state.changePic ?
            <div>
              <label>Image File</label>
              <button onClick={this.handleChange}>Change Image</button>
            </div>
            :
            <div>
              <label>Upload Image</label>
              <input name="blogPic" type="file" required onChange={this.handleFileUpload} />
            </div>
          }
          <div>
            <label>Blog Post</label>
            <textarea name="blogPost" defaultValue={this.props.chosenBlog[0].blogPost} />
          </div>
          <div>
            <label>Spotlight Blog?</label>
            <select name="spotlight" defaultValue={this.props.chosenBlog[0].spotlight ? 'Yes' : 'No'} type="text" required>
              <option>No</option>
              <option>Yes</option>
            </select>
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
