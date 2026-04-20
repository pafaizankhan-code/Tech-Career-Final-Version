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
  name: 'Careers at Tech Career IT Solutions',
  description:
    'Join Australia\u2019s senior-only engineering studio. 12 open roles across engineering, design, cloud, AI, and security. Remote-first, ESOP for every teammate.',
  url: `${SITE.baseUrl}/careers`,
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/careers' },
  ]),
  mainEntity: {
    '@type': 'Organization',
    name: SITE.brand,
    sameAs: SITE.baseUrl,
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 85 },
  },
}

const Careers = () => (
  <>
    <Seo
      title="Careers in Australia — Senior Engineering, Design & Cloud Jobs"
      description="Join Australia's senior-only engineering studio. 12 open roles with ESOP, top-quartile pay, remote-first culture, and a 4.9★ Glassdoor rating."
      keywords="IT jobs Australia, engineering careers Sydney, senior developer jobs Melbourne, remote developer jobs Australia, cloud engineer roles AU, AI ML jobs Australia, UX designer jobs Sydney, ESOP developer jobs Australia"
      canonical="https://techcareerit.com.au/careers"
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
