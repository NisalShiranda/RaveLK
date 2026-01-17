import React from 'react' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Partners from './components/Partners'
import Artists from './components/Artists.jsx'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        <Partners />
        <Artists />
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default App