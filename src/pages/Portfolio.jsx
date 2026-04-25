import React from 'react'
import Seo, { buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import FeaturedCase from '../components/portfolio/FeaturedCase'
import ProjectsGallery from '../components/portfolio/ProjectsGallery'
import Industries from '../components/portfolio/Industries'
import ClientsShowcase from '../components/portfolio/ClientsShowcase'
import Testimonials from '../components/Testimonials'
import StartProject from '../components/StartProject'

const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'What We Build · Capability Showcase',
  description:
    'A capability showcase from Tech Career IT Solutions LLP LLP — the websites, e-commerce stores, custom CRM / HRMS, mobile apps and marketing work we build for Indian businesses from our studio in Ahmedabad.',
  url: `${SITE.baseUrl}/portfolio`,
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ]),
}

const Portfolio = () => (
  <>
    <Seo
      title="Our Portfolio | Website, E-commerce, CRM & Mobile App Projects by an Ahmedabad Studio"
      description="See what Tech Career IT Solutions LLP builds — custom websites, Shopify & WooCommerce stores, CRM/HRMS platforms and mobile apps shipped for Indian businesses from our Ahmedabad studio."
      canonical="https://www.techcareer.site/portfolio"
      jsonLd={portfolioJsonLd}
    />
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
