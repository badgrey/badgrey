import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewArtist } from '../../store/artists';
import axios from 'axios';
import '../../../public/styles/index.scss';
import { sortedArtistsSelector } from '../../store/selectors/artists';

//state and genre options for dropdown
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
  'WY'
];
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
];

export class NewArtist extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      file: null
    };
  }

  //if not admin redirects
  componentDidMount() {
    if (!this.props.isAdmin) {
      this.props.history.push('/');
    }
  }

  //changes state to file name
  handleFileUpload = event => {
    this.setState({ file: event.target.files });
  };

  //sends artist info to backend
  async submit(event) {
    event.preventDefault();

    //checks to see if adding an artist that is already added
    for (let i = 0; i < this.props.artists.length; i++) {
      if (this.props.artists[i].name === name) {
        return;
      }
    }
    let artistInfo = {
      name: event.target.name.value,
      city: event.target.city.value,
      soundcloudURL: event.target.soundcloudURL.value,
      genre: event.target.genre.value,
      stateAbbrev: event.target.stateAbbrev.value
    };
    if (event.target.youtubeID.value !== '') {
      artistInfo.youtubeID = event.target.youtubeID.value.split(' ');
    }

    let picture;
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    picture = await axios.post('/api/uploadArtistPicture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    let key = picture.data.Location.split('/');
    artistInfo.imageURL = picture.data.Location;
    artistInfo.fileKey = key[key.length - 1];
    this.props.submitForm(artistInfo);
    this.props.history.push(`/discover/${artistInfo.stateAbbrev}`);
  }

  render() {
    return (
      <div className="outerNewArtistForm">
        <form className="newArtistForm" onSubmit={this.submit}>
          <div>
            <label>Artist Name</label>
            <input name="name" type="text" required placeholder="Name" />
          </div>
          <div>
            <label>Artist City</label>
            <input name="city" type="text" required placeholder="City" />
          </div>
          <div>
            <select
              name="stateAbbrev"
              type="text"
              required
              onChange={this.handleStateAbbrevChange}
              label="State"
            >
              <option value="" disabled selected>
                State
              </option>
              {stateOptions.map(state => {
                return <option key={state}>{state}</option>;
              })}
            </select>
            <select
              onChange={this.handleGenreChange}
              name="genre"
              type="text"
              required
              label="Genre"
            >
              <option value="" disabled selected>
                Genre
              </option>
              {genreOptions.map(genre => {
                return <option key={genre}>{genre}</option>;
              })}
            </select>
          </div>
          <div>
            <div>
              <label>Soundcloud URL</label>
              <input
                name="soundcloudURL"
                type="url"
                required
                placeholder="SoundCloudURL"
              />
            </div>
            <div>
              <label>Youtube ID</label>
              <input name="youtubeID" placeholder="ID Number" />
            </div>
            <div>
              <label>Uplaod Image</label>
              <input
                name="imageURL"
                type="file"
                required
                onChange={this.handleFileUpload}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    artists: sortedArtistsSelector(state),
    isAdmin: state.user.isAdmin
  };
};

const mapDispatch = dispatch => ({
  submitForm(artist) {
    dispatch(createNewArtist(artist));
  }
});

export default connect(mapState, mapDispatch)(NewArtist);
