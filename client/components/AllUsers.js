import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers, editSingleUser} from '../store/allusers'
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
  }

  changeAdmin(id, info) {
    this.props.submitChange(id, info)
    this.props.history.push('/users')
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
                {
                  this.state.selectedUser === user.username ? null :
                  <button onClick={() => {return this.view(user.username)}}>View</button>
                }
                {
                  this.state.selectedUser !== user.username ? null :
                  <div>
                    <h4>{user.email}</h4>
                    {
                      user.isAdmin ?
                      <button onClick={() => {return this.changeAdmin(user.id, {isAdmin: false})}}>Remove Admin</button>
                      :
                      <button onClick={() => {return this.changeAdmin(user.id, {isAdmin: true})}}>Make Admin</button>
                    }
                    {
                      user.isBlogger ?
                      <button>Remove Blogger</button>
                      :
                      <button>Make Blogger</button>
                    }
                    {
                      user.isEmployee ?
                      <button>Remove Employee</button>
                      :
                      <button>Make Employee</button>
                    }
                    <button>Delete User</button>
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
    },
    submitChange(id, user){
      dispatch(editSingleUser(id, user))
    }
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
