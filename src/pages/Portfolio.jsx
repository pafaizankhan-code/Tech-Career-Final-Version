import React from 'react'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import FeaturedCase from '../components/portfolio/FeaturedCase'
import ProjectsGallery from '../components/portfolio/ProjectsGallery'
import Industries from '../components/portfolio/Industries'
import ClientsShowcase from '../components/portfolio/ClientsShowcase'
import Testimonials from '../components/Testimonials'
import StartProject from '../components/StartProject'

const Portfolio = () => (
  <>
    <PortfolioHero />
    <FeaturedCase />
    <ProjectsGallery />
    <Industries />
    <ClientsShowcase />
    <Testimonials />
    <StartProject />
  </>
)

export default Portfolio
