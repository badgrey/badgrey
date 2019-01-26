import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

//main app with navbar seperate from routes
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
