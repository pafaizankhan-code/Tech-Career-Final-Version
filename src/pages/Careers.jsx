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
      title="Careers | Web Development, Design & Digital Marketing Jobs in Ahmedabad"
      description="Join Tech Career IT Solutions — a founder-led Ahmedabad studio hiring full-stack developers, UI/UX designers, digital marketers and interns. Real ownership, honest work, and room to grow from day one."
      canonical="https://techcareer.site/careers"
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
