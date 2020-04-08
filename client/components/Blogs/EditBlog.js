import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCurrentBlog, deleteError } from '../../store';
import axios from 'axios';
import '../../../public/styles/index.scss';

export class EditBlog extends Component {
  state = {
    changePic: false,
    file: null
  };

  //if you are not a blogger you get redirected
  componentDidMount() {
    if (!this.props.isBlogger) {
      this.props.history.push('/');
    }
  }

  handleChange = () => {
    this.setState({ changePic: !this.state.changePic });
  };

  //changes state to file name
  handleFileUpload = event => {
    this.setState({ file: event.target.files });
  };

  //submit all info to backend to edit blog
  submit = async event => {
    event.preventDefault();
    const blogInfo = {
      title: event.target.title.value,
      author: event.target.author.value,
      description: event.target.description.value,
      blogPost: event.target.blogPost.value,
      spotifyURL: event.target.spotify.value,
      spotlight: true
    };
    if (event.target.spotlight.value === 'No') blogInfo.spotlight = false;
    if (this.state.changePic) {
      let picture;
      await axios.post('/api/deleteBlogPicture', {
        name: this.props.chosenBlog.fileKey
      });
      const formData = new FormData();
      formData.append('file', this.state.file[0]);
      picture = await axios.post('/api/uploadBlogPicture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      let key = picture.data.Location.split('/');
      blogInfo.blogPic = picture.data.Location;
      blogInfo.fileKey = key[key.length - 1];
    } else {
      blogInfo.blogPic = this.props.chosenBlog.blogPic;
      blogInfo.fileKey = this.props.chosenBlog.fileKey;
    }
    try {
      await this.props.submitForm(this.props.chosenBlog.id, blogInfo);
      this.props.history.push(`/allblogs/${this.props.chosenBlog.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  //gets rid of error message after a little
  renderErrorMessage = () => {
    setTimeout(() => this.props.renderError(), 3000);
  };

  render() {
    const error = this.props.error.error;
    if (error) {
      this.renderErrorMessage();
    }
    return (
      <div className="outerEditBlogForm">
        <form className="editBlogForm" onSubmit={this.submit}>
          <div>
            <label>Blog Name</label>
            <input
              name="title"
              type="text"
              defaultValue={this.props.chosenBlog.title}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              name="author"
              type="text"
              required
              defaultValue={this.props.chosenBlog.author}
            />
          </div>
          <div>
            <div>
              <label>Description</label>
              <input
                name="description"
                type="text"
                required
                defaultValue={this.props.chosenBlog.description}
              />
            </div>
            <div>
              <label>Spotify URL</label>
              <input
                name="spotify"
                type="text"
                required
                defaultValue={this.props.chosenBlog.spotifyURL}
              />
            </div>
            {!this.state.changePic ? (
              <div>
                <label>Image File</label>
                <button onClick={this.handleChange}>Change Image</button>
              </div>
            ) : (
              <div>
                <label>Upload Image</label>
                <input
                  name="blogPic"
                  type="file"
                  required
                  onChange={this.handleFileUpload}
                />
              </div>
            )}
            <div>
              <label>Blog Post</label>
              <textarea
                name="blogPost"
                defaultValue={this.props.chosenBlog.blogPost}
              />
            </div>
            <div>
              <label>Spotlight Blog?</label>
              <select
                name="spotlight"
                defaultValue={this.props.chosenBlog.spotlight ? 'Yes' : 'No'}
                type="text"
                required
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        {//displays error if trying to save artist when not logged in
        error && error.error && (
          <div className="commentPostError">
            <p>{error.error}</p>
          </div>
        )}
      </div>
    );
  }
}

//chosen blog gotten from route
const mapState = ({ blogs, user, error }) => ({
  chosenBlog: blogs.chosenBlog,
  user,
  isAdmin: user.isAdmin,
  isBlogger: user.isBlogger,
  error
});

const mapDispatch = dispatch => ({
  submitForm: (id, blog) => dispatch(editCurrentBlog(id, blog)),
  renderError: () => dispatch(deleteError())
});

export default connect(mapState, mapDispatch)(EditBlog);
