import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import SocialBanner from './components/SocialBanner/SocialBanner'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'


const App = () => {
  useEffect(()=>{
    AOS.init({
        offset: 100,
        duration:700,
        easing: "ease-in",
        delay: 100,

      })
   
  })
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Body/>
      <Services/>
      <Banner/>
      <SocialBanner/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App