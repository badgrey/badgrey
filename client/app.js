import React from 'react'

import {Navbar} from './components'
import Footer from './components/Footer'
import Routes from './routes'

//main app with navbar seperate from routes
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
