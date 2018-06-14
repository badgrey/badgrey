import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Input,
  TextArea,
  Dropdown
} from 'semantic-ui-react';
import { createNewArtist } from '../store/artists'

const stateOptions = [
  { key: 'AL', text: 'AL', value: 'AL' },
  { key: 'AK', text: 'AK', value: 'AK' },
  { key: 'AZ', text: 'AZ', value: 'AZ' },
  { key: 'AR', text: 'AR', value: 'AR' },
  { key: 'CA', text: 'CA', value: 'CA' },
  { key: 'CO', text: 'CO', value: 'CO' },
  { key: 'CT', text: 'CT', value: 'CT' },
  { key: 'DMV', text: 'DMV', value: 'DMV' },
  { key: 'FL', text: 'FL', value: 'FL' },
  { key: 'GA', text: 'GA', value: 'GA' },
  { key: 'HI', text: 'HI', value: 'HI' },
  { key: 'ID', text: 'ID', value: 'ID' },
  { key: 'IL', text: 'IL', value: 'IL' },
  { key: 'IN', text: 'IN', value: 'IN' },
  { key: 'IA', text: 'IA', value: 'IA' },
  { key: 'KS', text: 'KS', value: 'KS' },
  { key: 'KY', text: 'KY', value: 'KY' },
  { key: 'LA', text: 'LA', value: 'LA' },
  { key: 'ME', text: 'ME', value: 'ME' },
  { key: 'MA', text: 'MA', value: 'MA' },
  { key: 'MI', text: 'MI', value: 'MI' },
  { key: 'MN', text: 'MN', value: 'MN' },
  { key: 'MS', text: 'MS', value: 'MS' },
  { key: 'MO', text: 'MO', value: 'MO' },
  { key: 'MT', text: 'MT', value: 'MT' },
  { key: 'NE', text: 'NE', value: 'NE' },
  { key: 'NV', text: 'NV', value: 'NV' },
  { key: 'NH', text: 'NH', value: 'NH' },
  { key: 'NJ', text: 'NJ', value: 'NJ' },
  { key: 'NM', text: 'NM', value: 'NM' },
  { key: 'NY', text: 'NY', value: 'NY' },
  { key: 'NC', text: 'NC', value: 'NC' },
  { key: 'ND', text: 'ND', value: 'ND' },
  { key: 'OH', text: 'OH', value: 'OH' },
  { key: 'OK', text: 'OK', value: 'OK' },
  { key: 'OR', text: 'OR', value: 'OR' },
  { key: 'PA', text: 'PA', value: 'PA' },
  { key: 'RI', text: 'RI', value: 'RI' },
  { key: 'ROW', text: 'ROW', value: 'ROW' },
  { key: 'SC', text: 'SC', value: 'SC' },
  { key: 'SD', text: 'SD', value: 'SD' },
  { key: 'TN', text: 'TN', value: 'TN' },
  { key: 'TX', text: 'TX', value: 'TX' },
  { key: 'UT', text: 'UT', value: 'UT' },
  { key: 'VT', text: 'VT', value: 'VT' },
  { key: 'WA', text: 'WA', value: 'WA' },
  { key: 'WV', text: 'WV', value: 'WV' },
  { key: 'WI', text: 'WI', value: 'WI' },
  { key: 'WY', text: 'WY', value: 'WY' },
]
const genreOptions = [
  {key: 'A', text: 'Alternative', value: 'Alternative'},
  {key: 'CL', text: 'Cloud', value: 'Cloud'},
  {key: 'CN', text: 'Conscious', value: 'Conscious'},
  {key: 'E', text: 'Experimental', value: 'Experimental'},
  {key: 'I', text: 'Instrumental', value: 'Instrumental'},
  {key: 'JS', text: 'Jazz / Soul', value: 'Jazz / Soul'},
  {key: 'O', text: 'Old School', value: 'Old School'},
  {key: 'P', text: 'Pop', value: 'Pop'},
  {key: 'R', text: 'R&B', value: 'R&B'},
  {key: 'T', text: 'Trap', value: 'Trap'}
]

export class NewArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      stateAbbrev: ''
    }
    this.submit = this.submit.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this)
    this.handleStateAbbrevChange = this.handleStateAbbrevChange.bind(this)
  }

  handleGenreChange = (event, data) => {
    this.setState({genre: data.value})
  }
  handleStateAbbrevChange = (event, data) => {
    this.setState({stateAbbrev: data.value})
  }

  submit(event) {
    event.preventDefault();
    const urlName = event.target.name.value.split(' ').join('')
    let artistInfo;
    if (event.target.youtubeID.value !== '') {
      artistInfo = {
        name: event.target.name.value,
        city: event.target.city.value,
        description: event.target.description.value,
        imageURL: event.target.imageURL.value,
        soundcloudURL: event.target.soundcloudURL.value,
        youtubeID: event.target.youtubeID.value.split(' '),
        genre: this.state.genre,
        stateAbbrev: this.state.stateAbbrev
      }
    } else {
      artistInfo = {
        name: event.target.name.value,
        city: event.target.city.value,
        description: event.target.description.value,
        imageURL: event.target.imageURL.value,
        soundcloudURL: event.target.soundcloudURL.value,
        genre: this.state.genre,
        stateAbbrev: this.state.stateAbbrev
      }
    }
    this.props.submitForm(artistInfo)
    this.props.history.push(`/discover/${this.state.stateAbbrev}/${urlName}`)
  }

  render() {
    return (
      <Form className="form" onSubmit={this.submit} >
        <Form.Field>
          <label>Artist Name</label>
          <Input name="name" type="text" required placeholder="Name" className="formInput" />
        </Form.Field>
        <Form.Field>
          <label>Artist City</label>
          <Input name="city" type="text" required placeholder="City" />
        </Form.Field>
        <Form.Group>
            <Dropdown name="stateAbbrev" type="text" required onChange={this.handleStateAbbrevChange} scrolling={true} label="State" options={stateOptions} placeholder="State" />
            <Dropdown onChange={this.handleGenreChange} name="genre" type="text" required label="Genre" options={genreOptions} placeholder="Genre" />
        </Form.Group>
        <Form.Field>
          <label>Artist Description</label>
          <TextArea name="description" type="text" required placeholder="Description" />
        </Form.Field>
          <Form.Group>
          <Form.Field>
            <label>Soundcloud URL</label>
            <Input name="soundcloudURL" type="url" required placeholder="SoundCloudURL" />
          </Form.Field>
          <Form.Field>
            <label>Youtube ID</label>
            <Input name="youtubeID" placeholder="ID Number" />
          </Form.Field>
          <Form.Field>
            <label>Image File Name</label>
            <Input name="imageURL" type="text" required placeholder="NAME.jpg" />
          </Form.Field>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  submitForm(artist){
    dispatch(createNewArtist(artist))
  }
});

export default connect(mapState, mapDispatch)(NewArtist);
