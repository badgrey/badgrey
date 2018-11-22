import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewInterview } from '../store'

export class NewInterview extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  componentDidMount () {
    if (!this.props.isAdmin) {
      this.props.history.push('/')
    }
  }

  submit(event) {
    event.preventDefault();
    let interviewInfo = {
        interview: {
          description: event.target.description.value,
          interview: event.target.interview.value,
          soundcloud: event.target.soundcloud.value,
        },
        artist: event.target.targetartist.value
      }
    let dup = false
    for (let i = 0; i < this.props.interviews.length; i++) {
      if (this.props.interviews[i].interview === interviewInfo.interview.interview) {
        dup = true
      }
    }
    if (!dup) {
      this.props.submitForm(interviewInfo)
      this.props.history.push(`/interviews`)
    }
  }

  render() {
    return (
      <div className="outerForm">
        <form className="form" id="newArtistForm" onSubmit={this.submit} >
          <div>
            <label>Description</label>
            <textarea name="description" type="text" required placeholder="Name" className="formInput" />
          </div>
          <div>
            <label>Target Artist</label>
            <select name="targetartist" type="text" required label="Artist">
              <option value="" disabled selected>Artist</option>
                {
                  this.props.artists.map((artist) => {
                    return (
                      <option key={artist.id} value={artist.id}>{artist.name}</option>
                    )
                  })
                }
              </select>
          </div>
          <div>
            <div>
              <label>Soundcloud URL</label>
              <input name="soundcloud" type="url" required placeholder="SoundCloudURL" />
            </div>
            <div>
              <label>Interview Image File</label>
              <input name="interview" type="text" required placeholder="NAME.jpg" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

const mapState = (state) => {
  return {
    artists: state.artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    isAdmin: state.user.isAdmin,
    interviews: state.interviews
  }
}

const mapDispatch = dispatch => ({
  submitForm(interview){
    dispatch(createNewInterview(interview))
  }
});

export default connect(mapState, mapDispatch)(NewInterview);
