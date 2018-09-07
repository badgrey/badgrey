import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers, editSingleUser, deleteCurrentUser} from '../store/allusers'
import '../../public/style.css'

export class AllUsers extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedUser: '',
      search: ''
    }

    this.view = this.view.bind(this)
    this.changeAdmin = this.changeBlogger.bind(this)
    this.changeBlogger = this.changeBlogger.bind(this)
    this.changeEmployee = this.changeEmployee.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.loadUsers()
    }
  }

  view(user) {
    this.setState({selectedUser: user})
  }

  changeAdmin(evt, id, info) {
    evt.preventDefault()
    this.props.submitChange(id, info)
    this.props.history.push('/')
  }

  changeBlogger(id, info) {
    this.props.submitChange(id, info)
    this.props.history.push('/')
  }

  changeEmployee(id, info) {
    this.props.submitChange(id, info)
    this.props.history.push('/')
  }

  deleteUser(id) {
    this.props.delete(id)
    this.props.history.push('/users')
  }

  handleSearch(evt) {
    this.setState({
      search: evt.target.value
    })
  }

  render() {
    const users = this.props.users.filter((user) => user.username.startsWith(this.state.search))
    return (
       this.props.users.length === 0 ? null :
      <div className="allUsers">
        <h1>All Users</h1>
        <div>
          <form>
            <label className="searchLabel">Search User</label>
            <input onChange={this.handleSearch} placeholder="Username" />
          </form>
        </div>
        <div className="users">
        {
          users.map((user) => {
            return (
              <div key={user.id} className="singleUser">
                <h1>{user.username}</h1>
                {
                  this.state.selectedUser === user.username ? null :
                  <button className="userViewButton" onClick={() => {return this.view(user.username)}}>View</button>
                }
                {
                  this.state.selectedUser !== user.username ? null :
                  <div>
                    <h4>{user.email}</h4>
                    <div className="userButtons">
                      <div className="userButtonsSection">
                        {
                          user.isAdmin ?
                          <button className="userButton" onClick={() => {return this.changeAdmin(user.id, {isAdmin: false})}}>Remove Admin</button>
                          :
                          <button className="userButton" onClick={() => {return this.changeAdmin(user.id, {isAdmin: true})}}>Make Admin</button>
                        }
                        {
                          user.isBlogger ?
                          <button className="userButton" onClick={() => {return this.changeBlogger(user.id, {isBlogger: false})}}>Remove Blogger</button>
                          :
                          <button className="userButton" onClick={() => {return this.changeBlogger(user.id, {isBlogger: true})}}>Make Blogger</button>
                        }
                      </div>
                      <div className="userButtonsSection">
                        {
                          user.isEmployee ?
                          <button className="userButton" onClick={() => {return this.changeEmployee(user.id, {isEmployee: false})}}>Remove Employee</button>
                          :
                          <button className="userButton" onClick={() => {return this.changeEmployee(user.id, {isEmployee: true})}}>Make Employee</button>
                        }
                        <button className="userButton" onClick={() => {return this.deleteUser(user.id)}}>Delete User</button>
                      </div>
                    </div>
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
    },
    delete (id) {
      dispatch(deleteCurrentUser(id))
    }
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
