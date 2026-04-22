import React from 'react'
import Seo, { buildBreadcrumbJsonLd, buildJobPostingJsonLd, SITE } from '../components/Seo'
import CareerHero from '../components/careers/CareerHero'
import WhyJoinUs from '../components/careers/WhyJoinUs'
import OpenPositions, { jobs } from '../components/careers/OpenPositions'
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

// One JobPosting JSON-LD per open role — each eligible for Google Jobs rich results.
const jobPostingsJsonLd = jobs.map(buildJobPostingJsonLd)

const Careers = () => (
  <>
    <Seo
      title="Careers | Web Development, Design & Digital Marketing Jobs in Ahmedabad"
      description="Join Tech Career IT Solutions — a founder-led Ahmedabad studio hiring full-stack developers, UI/UX designers, digital marketers and interns. Real ownership, honest work, and room to grow from day one."
      canonical="https://www.techcareer.site/careers"
      ogType="article"
      jsonLd={careersJsonLd}
    />
    {/* Per-role JobPosting JSON-LD (Google Jobs rich results) */}
    {jobPostingsJsonLd.map((ld, i) => (
      <script
        key={ld['@id'] || i}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    ))}
    <CareerHero />
    <WhyJoinUs />
    <OpenPositions />
    <HiringProcess />
    <EmployeeVoices />
  </>
)

export default Careers
