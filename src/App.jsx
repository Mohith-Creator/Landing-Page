import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/TrustBar'
import Features from './components/Features/Features'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import { useState } from 'react'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="app">
      <Header onStartTrial={openModal} />
      <main>
        <Hero onStartTrial={openModal} />
        <TrustBar />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Pricing onStartTrial={openModal} />
        <Testimonials />
        <FAQ />
        <FinalCTA onStartTrial={openModal} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App
