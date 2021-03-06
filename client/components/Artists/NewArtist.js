import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createNewArtist,
  checkForDuplicateArtist,
  deleteError,
} from '../../store';
import axios from 'axios';
import '../../../public/styles/index.scss';

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
  'WY',
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
  'Trap',
];

export class NewArtist extends Component {
  state = {
    file: null,
  };

  //if not admin redirects
  componentDidMount() {
    if (!this.props.isAdmin) {
      this.props.history.push('/');
    }
  }

  //changes state to file name
  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  };

  //sends artist info to backend
  submit = async (event) => {
    event.preventDefault();
    let artistInfo = {
      name: event.target.name.value,
      city: event.target.city.value,
      soundcloudURL: event.target.soundcloudURL.value,
      genre: event.target.genre.value,
      stateAbbrev: event.target.stateAbbrev.value,
    };
    if (event.target.youtubeID.value !== '') {
      artistInfo.youtubeID = event.target.youtubeID.value.split(' ');
    }
    try {
      await this.props.checkForDuplicateArtist(artistInfo.name);
      let picture;
      const formData = new FormData();
      formData.append('file', this.state.file[0]);
      picture = await axios.post('/api/uploadArtistPicture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      let key = picture.data.Location.split('/');
      artistInfo.imageURL = picture.data.Location;
      artistInfo.fileKey = key[key.length - 1];
      await this.props.createNewArtist(artistInfo);
      this.props.history.push(
        `/RapMap/${
          this.props.chosenArtist.stateAbbrev
        }/${this.props.chosenArtist.name.split(' ').join('')}_${
          this.props.chosenArtist.id
        }`
      );
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
              {stateOptions.map((state) => {
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
              {genreOptions.map((genre) => {
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
        {
          //displays error if trying to save artist when not logged in
          error && error.error && (
            <div className="commentPostError">
              <p>{error.error}</p>
            </div>
          )
        }
      </div>
    );
  }
}

const mapState = ({ user, artists, error }) => ({
  isAdmin: user.isAdmin,
  error,
  chosenArtist: artists.chosenArtist,
});

const mapDispatch = (dispatch) => ({
  createNewArtist: (artist) => dispatch(createNewArtist(artist)),
  checkForDuplicateArtist: (name) => dispatch(checkForDuplicateArtist(name)),
  renderError: () => dispatch(deleteError()),
});

export default connect(mapState, mapDispatch)(NewArtist);
