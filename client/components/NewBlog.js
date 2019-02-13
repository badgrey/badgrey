import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewBlog } from '../store'
import axios from 'axios'

export class NewBlog extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
      file: null
    }
  }

  //changes state to file name
  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  //if not a blogger redirect
  componentDidMount () {
    if (!this.props.isBlogger) {
      this.props.history.push('/')
    }
  }

  //submits new blog info to database
  async submit(event) {
    event.preventDefault();

    let chosenArtist = this.props.artists.filter((artist) => {
      return artist.name === event.target.artist.value
    })

    let title = event.target.title.value
    let author = event.target.author.value
    let description = event.target.description.value
    let blogPost = event.target.blogPost.value
    let spotifyURL = event.target.spotify.value

    const formData = new FormData();
    formData.append('file', this.state.file[0]);

    let picture = await axios.post('/api/uploadBlogPicture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    let key = picture.data.Location.split('/')
    let blogInfo = {
      blogInfo: {
        title,
        author,
        description,
        blogPic: picture.data.Location,
        blogPost,
        spotifyURL,
        date: new Date(),
        fileKey: key[key.length - 1]
      },
      user: this.props.user.id,
      artist: chosenArtist[0].id
    }

    this.props.submitForm(blogInfo)
    this.props.history.push(`/`)
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
          <label>Spotify URL</label>
          <input name="spotify" type="text" required placeholder="Spotify URL" />
        </div>
        <div>
          <label>Upload Image</label>
          <input name="blogPic" type="file" required onChange={this.handleFileUpload} />
        </div>
        <div>
          <label>Artist</label>
          <select name="artist" type="text" required label="Artist">
          <option value="" disabled selected>Artist</option>
            {
              this.props.artists.map((artist) => {
                return (
                  <option key={artist.id}>{artist.name}</option>
                )
              })
            }
          </select>
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
