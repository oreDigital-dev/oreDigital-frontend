import React from 'react'
import AboutUs from './aboutUs'
import Footer from './footer'
import HomePage from './homePage'
import Navbar from './navbar'
import Partners from './partners'
import ServicesC from './servicesContent'
function WelcomePage() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ServicesC />
      <AboutUs />
      <Partners />
      <Footer />
    </div>
  )
}

export default WelcomePage