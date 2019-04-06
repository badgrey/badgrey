import React from 'react'

import {Navbar, MobileNavbar} from './components'
import Footer from './components/Footer'
import Routes from './routes'

let mobile = false
if (window.matchMedia('(max-width: 600px)').matches) {
  mobile = true
}

//main app with navbar seperate from routes
const App = () => {
  return (
    <div>
    {
      mobile ?
      <MobileNavbar />
      :
      <Navbar />
    }
      <Routes />
      <Footer />
    </div>
  )
}

export default App
