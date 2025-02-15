import './App.css'
import FeatureGrid from './components/FeatureGrid'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pg from './components/Pg'
import SetupOneKey from './components/SetupOneKey'
import Slider from './components/Slider'


import Banner from './components/Banner'
import BentoGrid from './components/Bento'
import BlackWarpBackground from './components/BlackWrapBackground'
import FAQSection from './components/FAQ'
import PartnersSection from './components/Partner'
import RootLayout from './RootLayout'

function App() {
  return (
    <RootLayout>
      <div className='flex flex-col items-center py-8 '>
      <Navbar />
      <HeroSection />
      {/* <Phone /> */}
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
