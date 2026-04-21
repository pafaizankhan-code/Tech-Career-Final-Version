import React from 'react'
import Seo, { buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import CareerHero from '../components/careers/CareerHero'
import WhyJoinUs from '../components/careers/WhyJoinUs'
import OpenPositions from '../components/careers/OpenPositions'
import HiringProcess from '../components/careers/HiringProcess'
import EmployeeVoices from '../components/careers/EmployeeVoices'

const careersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE.baseUrl}/careers`,
  name: 'Careers at Tech Career IT Solutions LLP',
  description:
    'Help us build a new, founder-led web and digital marketing studio in Ahmedabad. A small team, interesting first clients, and real ownership from day one.',
  url: `${SITE.baseUrl}/careers`,
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/careers' },
  ]),
  mainEntity: {
    '@type': 'Organization',
    name: SITE.brand,
    sameAs: SITE.baseUrl,
  },
}

const Careers = () => (
  <>
    <Seo
      title="Careers — Help Build a New Ahmedabad Studio"
      description="Join a new, founder-led web and digital marketing studio in Ahmedabad. Open roles for full-stack developers, designers and interns — with real ownership and the chance to shape the studio from day one."
      keywords="developer jobs ahmedabad, react developer jobs gujarat, web designer jobs ahmedabad, internship ahmedabad it, startup jobs ahmedabad, digital marketing jobs gujarat"
      canonical="https://tech-career-final-version.vercel.app/careers"
      ogType="article"
      jsonLd={careersJsonLd}
    />
    <CareerHero />
    <WhyJoinUs />
    <OpenPositions />
    <HiringProcess />
    <EmployeeVoices />
  </>
)

export default Careers
