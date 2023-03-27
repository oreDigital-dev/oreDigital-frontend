import React from 'react'
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
      <Partners />
      <Footer />
    </div>
  )
}

export default WelcomePage