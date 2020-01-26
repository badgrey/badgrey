import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import artists from './artists'
import error from './error'
import email from './email'
import savedArtists from './savedArtists'
import allusers from './allusers'
import blogs from './blogs'
import comments from './comments'
import interviews from './interviews'
import originalcontent from './originalcontent'
import theBricks from './theBricks'

//importing all individual reducers and putting them in a combined reducer

const reducer = combineReducers({user, artists, error, email, savedArtists, allusers, blogs, comments, interviews, originalcontent, theBricks})
const middleware =  process.env.NODE_ENV === 'production' ? composeWithDevTools(applyMiddleware(
  thunkMiddleware))
  :
  composeWithDevTools(applyMiddleware(
  thunkMiddleware, createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

//exporting all functions from all reducers

export default store
export * from './user'
export * from './artists'
export * from './error'
export * from './email'
export * from './savedArtists'
export * from './allusers'
export * from './blogs'
export * from './comments'
export * from './interviews'
export * from './originalcontent'
export * from './theBricks'

