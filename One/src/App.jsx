import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import SubHero from './Components/SubHero'
import SubFeature from './Components/SubFeature'
import CardsSection from './Components/CardsSection'
import PartnershipSection from './Components/PartnershipSection'
import SubsetHero from './Components/SubsetHero'
import Faq from './Components/Faq'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SubHero />
      <Features />
      <SubFeature />
      <CardsSection />
      <PartnershipSection />
      <SubsetHero />
      <Faq />
      <Footer />
     
    </>
  )
}

export default App

