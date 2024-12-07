import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import Features from '../components/features/Features'
import Potential from '../components/potential/Potential'
import Question from '../components/commonQuestion/Question'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div className='container mx-auto'>
        <Features />
        <Potential />
        <Question />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage