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
  name: 'About Tech Career IT Solutions',
  url: `${SITE.baseUrl}/about`,
  description:
    'Meet Australia\u2019s senior-only engineering studio — our story, mission, values, leadership, and milestones since 2013.',
  mainEntity: { '@id': `${SITE.baseUrl}/#organization` },
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
}

const About = () => (
  <>
    <Seo
      title="About Us — Australia's Senior-Only Engineering Studio"
      description="Since 2013, Tech Career IT Solutions has partnered with Australian CTOs, founders, and Fortune 500 leaders. Meet the team, mission, and values of the country's best IT company."
      keywords="about Tech Career IT, Australian IT consultancy, senior engineering team Sydney, Australian software studio, IT company story, leadership team, ISO 27001 IT Australia"
      canonical="https://techcareerit.com.au/about"
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
