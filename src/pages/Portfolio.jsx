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
    'A capability showcase from Tech Career IT Solutions LLP — the websites, e-commerce stores, custom CRM / HRMS, mobile apps and marketing work we build for Indian businesses from our studio in Ahmedabad.',
  url: `${SITE.baseUrl}/portfolio`,
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ]),
}

const Portfolio = () => (
  <>
    <Seo
      title="What We Build - Capability Showcase | Tech Career IT Solutions LLP"
      description="A transparent capability showcase from a new Ahmedabad studio — the websites, e-commerce stores, custom CRM / HRMS and mobile apps we can ship for you, with realistic timelines and pricing."
      keywords="web development portfolio ahmedabad, shopify developer portfolio india, custom crm hrms portfolio, mobile app developer gujarat, ecommerce agency showcase, tech career it solutions work"
      canonical="https://tech-career-final-version.vercel.app/portfolio"
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
