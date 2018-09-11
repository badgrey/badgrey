import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewArtist } from '../store/artists'

const stateOptions = [
'AL',
'AK',
'AZ',
'AR',
'CA',
'CO',
'CT',
'DMV',
'FL',
'GA',
'HI',
'ID',
'IL',
'IN',
'IA',
'KS',
'KY',
'LA',
'ME',
'MA',
'MI',
'MN',
'MS',
'MO',
'MT',
'NE',
'NV',
'NH',
'NJ',
'NM',
'NY',
'NC',
'ND',
'OH',
'OK',
'OR',
'PA',
'RI',
'International',
'SC',
'SD',
'TN',
'TX',
'UT',
'VT',
'WA',
'WV',
'WI',
'WY',
]
const genreOptions = [
'Alternative',
 'Cloud',
 'Conscious',
'Experimental',
'Instrumental',
 'Jazz / Soul',
'Old School',
'Pop',
'R&B',
'Trap'
]

export class NewArtist extends Component {
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
    const urlName = event.target.name.value.split(' ').join('')
    let artistInfo;
    if (event.target.youtubeID.value !== '') {
      artistInfo = {
        name: event.target.name.value,
        city: event.target.city.value,
        imageURL: event.target.imageURL.value,
        soundcloudURL: event.target.soundcloudURL.value,
        youtubeID: event.target.youtubeID.value.split(' '),
        genre: event.target.genre.value,
        stateAbbrev: event.target.stateAbbrev.value
      }
    } else {
      artistInfo = {
        name: event.target.name.value,
        city: event.target.city.value,
        imageURL: event.target.imageURL.value,
        soundcloudURL: event.target.soundcloudURL.value,
        genre: event.target.genre.value,
        stateAbbrev: event.target.stateAbbrev.value
      }
    }
    let dup = false
    for (let i = 0; i < this.props.artists.length; i++) {
      if (this.props.artists[i].name === artistInfo.name) {
        dup = true
      }
    }
    if (!dup) {
      this.props.submitForm(artistInfo)
      this.props.history.push(`/discover/${artistInfo.stateAbbrev}/${urlName}`)
    }
  }

  render() {
    return (
      <div className="outerForm">
        <form className="form" id="newArtistForm" onSubmit={this.submit} >
          <div>
            <label>Artist Name</label>
            <input name="name" type="text" required placeholder="Name" className="formInput" />
          </div>
          <div>
            <label>Artist City</label>
            <input name="city" type="text" required placeholder="City" />
          </div>
          <div>
              <select name="stateAbbrev" type="text" required onChange={this.handleStateAbbrevChange} label="State">
              <option value="" disabled selected>State</option>
                {
                  stateOptions.map((state) => {
                    return (
                      <option key={state}>{state}</option>
                    )
                  })
                }
              </select>
              <select onChange={this.handleGenreChange} name="genre" type="text" required label="Genre">
              <option value="" disabled selected>Genre</option>
                {
                  genreOptions.map((genre) => {
                    return (
                      <option key={genre}>{genre}</option>
                    )
                  })
                }
              </select>
          </div>
            <div>
            <div>
              <label>Soundcloud URL</label>
              <input name="soundcloudURL" type="url" required placeholder="SoundCloudURL" />
            </div>
            <div>
              <label>Youtube ID</label>
              <input name="youtubeID" placeholder="ID Number" />
            </div>
            <div>
              <label>Image File Name</label>
              <input name="imageURL" type="text" required placeholder="NAME.jpg" />
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
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => ({
  submitForm(artist){
    dispatch(createNewArtist(artist))
  }
});

export default connect(mapState, mapDispatch)(NewArtist);
