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
  name: 'Our Work · Case Studies',
  description:
    'A curated archive of 250+ IT projects shipped for Australian and global clients — from fintech unicorns to Fortune 500 logistics.',
  url: `${SITE.baseUrl}/portfolio`,
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ]),
}

const Portfolio = () => (
  <>
    <Seo
      title="Our Work — IT Case Studies from Australia's Best | Portfolio"
      description="Explore 250+ shipped projects — SaaS, fintech, cloud, AI and security work from Australia's premier IT consultancy. Real clients, real outcomes, real metrics."
      keywords="IT portfolio Australia, software development case studies, SaaS projects Sydney, fintech app case studies Melbourne, cloud migration projects Australia, AI ML case studies, enterprise IT portfolio"
      canonical="https://techcareerit.com.au/portfolio"
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
