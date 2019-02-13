import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editCurrentArtist} from '../store'
import axios from 'axios'

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
    this.submit = this.submit.bind(this)
    this.state = {
      changePic: false,
      file: null
    }
  }

  //if you are not admin you are redirected to home
  componentDidMount () {
    if (!this.props.isAdmin) {
      this.props.history.push('/')
    }
  }

  handleChange = () => {
    this.setState({changePic: !this.state.changePic})
  }

  //changes state to file name
  handleFileUpload = (event) => {
    this.setState({file: event.target.files})
    console.log(event.target.files[0].name)
  }

  //submit form info to backend
  async submit(event) {
    event.preventDefault();
    const urlName = event.target.name.value.split(' ').join('')
    let artistInfo;
    let name = event.target.name.value
    let city = event.target.city.value
    let soundcloudURL = event.target.soundcloudURL.value
    let youtubeID = event.target.youtubeID.value.split(' ')
    let genre = event.target.genre.value
    let stateAbbrev = event.target.stateAbbrev.value
    let picture

    if (this.state.changePic) {
      await axios.post('/api/deleteArtistPicture', {name: this.props.chosenArtist[0].fileKey})
      const formData = new FormData();
      formData.append('file', this.state.file[0]);
      picture = await axios.post('/api/uploadArtistPicture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      let key = picture.data.Location.split('/')
      if (youtubeID !== '') {
        artistInfo = {
          name,
          city,
          imageURL: picture.data.Location,
          soundcloudURL,
          youtubeID,
          genre,
          stateAbbrev,
          fileKey: key[key.length - 1]
        }
      } else {
        artistInfo = {
          name,
          city,
          imageURL: picture.data.Location,
          soundcloudURL,
          genre,
          stateAbbrev,
          fileKey: key[key.length - 1]
        }
      }
    } else {
      if (youtubeID !== '') {
        artistInfo = {
          name,
          city,
          imageURL: this.props.chosenArtist[0].imageURL,
          soundcloudURL,
          youtubeID,
          genre,
          stateAbbrev,
          fileKey: this.props.chosenArtist[0].fileKey
        }
      } else {
        artistInfo = {
          name,
          city,
          imageURL: this.props.chosenArtist[0].imageURL,
          soundcloudURL,
          genre,
          stateAbbrev,
          fileKey: this.props.chosenArtist[0].fileKey
        }
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
              {
                !this.state.changePic ?
                <div>
                  <label>Image File</label>
                  <button onClick={this.handleChange}>Change Image</button>
                </div>
                :
                <div>
                  <label>Upload Image</label>
                  <input name="imageURL" type="file" required onChange={this.handleFileUpload} />
                </div>
              }
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
      let targetArtist = ownProps.match.params.artist.split('_')[0]
      return artist.name.split(' ').join('') === targetArtist
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
