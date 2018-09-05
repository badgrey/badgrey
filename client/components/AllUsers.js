import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/allusers'
import '../../public/style.css'

export class AllUsers extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedUser: ''
    }

    this.view = this.view.bind(this)
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.loadUsers()
    }
  }

  view(user) {
    this.setState({selectedUser: user})
    console.log(this.state)
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
                <button onClick={() => {return this.view(user.username)}}>View</button>
                {
                  this.state.selectedUser !== user.username ? null :
                  <div>
                    <h4>{user.email}</h4>
                  </div>
                }
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
