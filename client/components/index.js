/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Discover} from './Discover'
export {default as State} from './State'
export {default as Artist} from './Artist'
export {default as YoutubePlayer} from './Youtube'
export {default as SingleGenre} from './SingleGenre'
export {default as NewArtist} from './NewArtist'
export {default as EditArtist} from './EditArtist'
export {default as EditUser} from './EditUser'
