import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../public/style.css'

export class AllBlogs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>All Blog Posts</h1>
        <div>

        </div>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(AllBlogs)
