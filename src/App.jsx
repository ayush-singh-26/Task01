import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { Contact } from './components/Contact'
import Hero_Section from './components/Hero_Section'
import { PricingTable } from './components/Pricing_table'

function App() {
  return (
    <div className="relative min-h-screen bgImage">
      <div className="relative z-10 px-6 py-8 space-y-6">
        <Navbar />
        <Hero_Section/>
        <Card />
        <PricingTable/>
        <Contact />
      </div>
    </div>
  )
}

export default App
