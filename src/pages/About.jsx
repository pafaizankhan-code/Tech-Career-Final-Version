import React from 'react'
import Seo, { buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import MissionVision from '../components/about/MissionVision'
import CoreValues from '../components/about/CoreValues'
import Milestones from '../components/about/Milestones'
import Leadership from '../components/about/Leadership'
import LifeAndAwards from '../components/about/LifeAndAwards'
import Testimonials from '../components/Testimonials'
import StartProject from '../components/StartProject'

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Tech Career IT Solutions LLP',
  url: `${SITE.baseUrl}/about`,
  description:
    'Meet Tech Career IT Solutions LLP — a new, founder-led web development, e-commerce and digital marketing studio based in Ahmedabad, India. Our story, mission, values and team.',
  mainEntity: { '@id': `${SITE.baseUrl}/#organization` },
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
}

const About = () => (
  <>
    <Seo
      title="About Us — Founder-Led Web & Marketing Studio in Ahmedabad"
      description="Tech Career IT Solutions LLP is a new founder-led studio based at iHub, Ahmedabad — building websites, e-commerce stores, custom CRM / HRMS, mobile apps and digital marketing for growing teams."
      keywords="about tech career it solutions llp, web development studio ahmedabad, new digital agency india, founder led software studio, ecommerce agency gujarat, ihub ahmedabad startup"
      canonical="https://tech-career-final-version.vercel.app/about"
      ogType="article"
      jsonLd={aboutJsonLd}
    />
    <AboutHero />
    <OurStory />
    <MissionVision />
    <CoreValues />
    <Milestones />
    <Leadership />
    <LifeAndAwards />
    <Testimonials />
    <StartProject />
  </>
)

export default About
