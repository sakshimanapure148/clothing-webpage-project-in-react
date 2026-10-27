import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Footer from './Components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Footer />
  </StrictMode>,
)
