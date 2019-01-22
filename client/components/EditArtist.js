import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editCurrentArtist} from '../store'

//state and genre options for drop down
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

export class EditArtist extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  //if you are not admin you are redirected to home
  componentDidMount () {
    if (!this.props.isAdmin) {
      this.props.history.push('/')
    }
  }

  //submit form info to backend
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
    //submits then pushes new route to new artists page
    this.props.submitForm(this.props.chosenArtist[0].id, artistInfo)
    this.props.history.push(`/discover/${artistInfo.stateAbbrev}/${urlName + `_${this.props.chosenArtist[0].id}`}`)
  }

  render() {
    return (
      <div className="outerForm">
        <form className="form" id="newArtistForm" onSubmit={this.submit} >
          <div>
            <label>Artist Name</label>
            <input name="name" type="text" className="formInput" defaultValue={this.props.chosenArtist[0].name} />
          </div>
          <div>
            <label>Artist City</label>
            <input name="city" type="text" required defaultValue={this.props.chosenArtist[0].city} />
          </div>
          <div>
              <select name="stateAbbrev" type="text" required label="State" defaultValue={this.props.chosenArtist[0].stateAbbrev}>
                {
                  //maps out state options for dropdown
                  stateOptions.map((state) => {
                    return (
                      <option key={state}>{state}</option>
                    )
                  })
                }
              </select>
              <select name="genre" type="text" required label="Genre" defaultValue={this.props.chosenArtist[0].genre}>
                {
                  //maps out genre options for dropdown
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
                <input name="soundcloudURL" type="url" required defaultValue={this.props.chosenArtist[0].soundcloudURL} />
              </div>
              <div>
                <label>Youtube ID</label>
                <input name="youtubeID" defaultValue={this.props.chosenArtist[0].youtubeID} />
              </div>
              <div>
                <label>Image File Name</label>
                <input name="imageURL" type="text" required defaultValue={this.props.chosenArtist[0].imageURL} />
              </div>
            </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

//chooses artist based off route
const mapState = ({artists, user}, ownProps) => {
  return {
    chosenArtist: artists.filter((artist) => {
      return artist.name.split(' ').join('') === ownProps.match.params.artist
    }),
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1
      if (artistA.name > artistB.name) return 1
      return 0
    }),
    user,
    isAdmin: user.isAdmin
  }
}


const mapDispatch = dispatch => ({
  submitForm(id, artist){
    dispatch(editCurrentArtist(id, artist))
  }
});

export default connect(mapState, mapDispatch)(EditArtist);
