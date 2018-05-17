import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Segment, Button, Form, Input, Message, Checkbox} from "semantic-ui-react";

export class NewArtist extends Component {

  constructor() {
    super()
    this.submit = this.submit.bind(this)
  }

  submit() {
    console.log('whatever')
  }

  render() {
    return (
      <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    )
  }
}

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(NewArtist)
