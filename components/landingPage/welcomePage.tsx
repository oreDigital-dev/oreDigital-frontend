import React from 'react'
import AboutUs from './aboutUs'
import Footer from './footer'
import HomePage from './homePage'
import Installation from './installation'
import Navbar from './navbar'
import Partners from './partners'
import Process from './process'
import ServicesC from './servicesContent'
function WelcomePage() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ServicesC />
      <Installation />
      <Process />
      <AboutUs />
      <Partners />
      <Footer />
    </div>
  )
}

export default WelcomePage