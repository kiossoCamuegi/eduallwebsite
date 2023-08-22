import React from 'react'
import Header from './Components/Header'
import Description from './Components/Description'
import Info from './Components/Info'
import Modules from './Components/Modules' 
import Prices from './Components/Prices'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Description />
        <Info />
        <Prices />
        <Footer />
    </div>
  )
}

export default Home
