import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/style.css'
import {YoutubePlayer} from './index'
import {fetchOriginalContent} from '../store'
import {Link} from 'react-router-dom'

export class OriginalContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

    )
  }
}


const mapState = ({originalcontent}, ownProps) => {
  return {
    originalcontent
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOriginalContent() {
      dispatch(fetchOriginalContent())
    }
  }
}

export default connect(mapState, mapDispatch)(Artist)
