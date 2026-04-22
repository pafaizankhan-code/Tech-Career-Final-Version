import React from 'react'
import Seo, { buildBreadcrumbJsonLd, buildPersonJsonLd, SITE } from '../components/Seo'
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

// Person JSON-LD for the leadership team — supports Google "Knowledge" and employee rich results.
const leadershipJsonLd = [
  buildPersonJsonLd({
    id: `${SITE.baseUrl}/about#founder`,
    name: 'Faizan Pathan',
    jobTitle: 'Founder',
    description:
      'Full-stack developer and founder of Tech Career IT Solutions LLP, based in Ahmedabad. Handles strategy, scoping, development and delivery across every engagement.',
    url: `${SITE.baseUrl}/about`,
    sameAs: ['https://www.instagram.com/techcareer.llp'],
  }),
  buildPersonJsonLd({
    id: `${SITE.baseUrl}/about#design-partner`,
    name: 'Design Partner',
    jobTitle: 'UI / UX Lead',
    description:
      'Trusted design partner for Figma wireframes, prototypes and UI systems on projects that need design depth.',
    url: `${SITE.baseUrl}/about`,
  }),
]

const About = () => (
  <>
    <Seo
      title="About Us | Founder-Led Web Development & Digital Marketing Studio in Ahmedabad"
      description="Meet Tech Career IT Solutions — a founder-led Ahmedabad studio building custom websites, e-commerce stores, CRM/HRMS, mobile apps and digital marketing with transparent pricing and honest timelines."
      canonical="https://www.techcareer.site/about"
      ogType="article"
      jsonLd={aboutJsonLd}
    />
    {/* Person JSON-LD for each leader */}
    {leadershipJsonLd.map((ld, i) => (
      <script
        key={ld['@id'] || i}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    ))}
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
