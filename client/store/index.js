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

const reducer = combineReducers({user, artists, error, email, savedArtists, allusers})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './artists'
export * from './error'
export * from './email'
export * from './savedArtists'
export * from './allusers'
