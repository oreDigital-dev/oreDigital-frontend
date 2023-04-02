import React from 'react'
import AboutUs from './aboutUs'
import Footer from './footer'
import HomePage from './homePage'
import Installation from './installation'
import Navbar from './navbar'
import OurImpact from './ourImpact'
import Partners from './partners'
import Process from './process'
import ServicesC from './servicesContent'
import Team from './team'
function WelcomePage() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ServicesC />
      <Installation />
      <Process />
      <Team />
      <OurImpact />
      <AboutUs />
      <Partners />
      <Footer />
    </div>
  )
}

export default WelcomePage