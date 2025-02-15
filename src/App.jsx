import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pg from './components/Pg'
import Footer from './components/Footer'
import SetupOneKey from './components/SetupOneKey'
import FeatureGrid from './components/FeatureGrid'
import Slider from './components/Slider'
import HeroSection from './components/HeroSection'


import BlackWarpBackground from './components/BlackWrapBackground'
import RootLayout from './RootLayout'
import FAQSection from './components/FAQ'
import PartnersSection from './components/Partner'
import Banner from './components/Banner'
import BentoGrid from './components/Bento'
import Phone from './components/Phone'

function App() {
  return (
    <RootLayout>
      <div className='flex flex-col items-center py-8 '>
      <Navbar />
      <HeroSection />
      <Phone />
      <Slider />
      <FeatureGrid />
      <Banner />
      <div className="mb-40">
        <Pg />
      </div>
      <BentoGrid />
      <BlackWarpBackground />
      <FAQSection />
      <PartnersSection />
      <div className="mb-20 "> 
      <SetupOneKey />
      </div>
    </div>
      <Footer />
      </RootLayout>
    
  )
}

export default App
