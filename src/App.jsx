import { useState } from 'react'
import './App.css'
import Navbar from './componants/navbar.jsx'
import HeroSection from './componants/heroSection.jsx'
import Our_client from './componants/our-client.jsx'
import Over_Community from './componants/our-Community.jsx'
import Pixelgrade from './componants/Pixelgrade.jsx'
import Footer from './componants/footer.jsx'
import Achievements from './componants/achivement.jsx'
import Pixelgrade2 from './componants/Pixelgrade2.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
   <Our_client/>
   <Over_Community/>
   <Pixelgrade/>
   <Achievements/>
    <Pixelgrade2/>
   <Footer/>
   </>
  )
}

export default App
