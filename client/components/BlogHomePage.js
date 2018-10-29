import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchBlogs} from '../store'

export class BlogHomePage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    if (this.props.blogs === []) {
      this.props.loadInitialData()
    }
  }

  render() {
    return (
      this.props.blogs.length === 0 ? null :
      <div>
        <div>
          <Link to={`/allBlogs/${this.props.blogs[0].id}`}>
            {this.props.blogs[0].name}
          </Link>
        </div>
        <div>
          <Link to={`/allBlogs/${this.props.blogs[1].id}`}>
            {this.props.blogs[1].name}
          </Link>
        </div>
        <div>
          <Link to={`/allBlogs/${this.props.blogs[2].id}`}>
            {this.props.blogs[2].name}
          </Link>
        </div>
        <div>
          <Link to="/allBlogs">
            <button>All Blogs</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapState = ({blogs}, ownProps) => {
  return {
    blogs: blogs.sort((blogA, blogB) => {
      if (blogA.date < blogB.date) return -1
      if (blogA.date > blogB.date) return 1
      return 0
    })
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchBlogs())
    }
  }
}

export default connect(mapState, mapDispatch)(BlogHomePage)
