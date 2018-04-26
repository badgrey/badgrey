import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

export class State extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.state}'s Artists</h1>
      </div>
    )
  }
}

const mapState = ({artists}) => ({artists})

const mapDispatch = null

export default connect(mapState, mapDispatch)(State)
