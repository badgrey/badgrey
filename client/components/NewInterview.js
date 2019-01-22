import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewInterview } from '../store'

export class NewInterview extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  //if not admin redirect
  componentDidMount () {
    if (!this.props.isAdmin) {
      this.props.history.push('/')
    }
  }

  //submits new interview info to backend
  submit(event) {
    event.preventDefault();
    let interviewArray = [event.target.interviewQuestion1.value, event.target.interviewAnswer1.value, event.target.interviewQuestion2.value, event.target.interviewAnswer2.value, event.target.interviewQuestion3.value, event.target.interviewAnswer3.value, event.target.interviewQuestion4.value, event.target.interviewAnswer4.value, event.target.interviewQuestion5.value, event.target.interviewAnswer5.value]
    let interviewInfo = {
        interview: {
          description: event.target.description.value,
          interview: interviewArray,
          soundcloud: event.target.soundcloud.value,
        },
        artist: event.target.targetartist.value
      }
      //cannot have two interviews for one artist
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
        <form className="form" id="newInterviewForm" onSubmit={this.submit} >
          <div>
            <label>Description</label>
            <textarea name="description" type="text" required placeholder="Description" className="formInput" />
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
              <label>Interview Question 1</label>
              <input name="interviewQuestion1" type="text" required placeholder="Question 1" />
            </div>
            <div>
              <label>Answer to Question 1</label>
              <input name="interviewAnswer1" type="text" required placeholder="Answer to Question 1" />
            </div>
            <div>
              <label>Interview Question 2</label>
              <input name="interviewQuestion2" type="text" required placeholder="Question 2" />
            </div>
            <div>
              <label>Answer to Question 2</label>
              <input name="interviewAnswer2" type="text" required placeholder="Answer to Question 2" />
            </div>
            <div>
              <label>Interview Question 3</label>
              <input name="interviewQuestion3" type="text" required placeholder="Question 3" />
            </div>
            <div>
              <label>Answer to Question 3</label>
              <input name="interviewAnswer3" type="text" required placeholder="Answer to Question 3" />
            </div>
            <div>
              <label>Interview Question 4</label>
              <input name="interviewQuestion4" type="text" required placeholder="Question 4" />
            </div>
            <div>
              <label>Answer to Question 4</label>
              <input name="interviewAnswer4" type="text" required placeholder="Answer to Question 4" />
            </div>
            <div>
              <label>Interview Question 5</label>
              <input name="interviewQuestion5" type="text" required placeholder="Question 5" />
            </div>
            <div>
              <label>Answer to Question 5</label>
              <input name="interviewAnswer5" type="text" required placeholder="Answer to Question 5" />
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
