import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Portfolio from './pages/Portfolio'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import Sitemap from './pages/Sitemap'
import BlogDetail from './pages/BlogDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <ScrollToTop/>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
