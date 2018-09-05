import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/allusers'
import '../../public/style.css'

export class AllUsers extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.loadUsers()
    }
  }

  render() {
    return (
       this.props.users.length === 0 ? null :
      <div>
        <h1>ALL USERS</h1>
        <div>
        {
          this.props.users.map((user) => {
            return (
              <div key={user.id}>
                <h1>{user.username}</h1>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

const mapState = ({allusers}) => {
  return {
    users: allusers
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadUsers () {
      dispatch(fetchUsers())
    }
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
