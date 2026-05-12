'use client'

import React from 'react'
import {
  organizationJsonLd,
  buildFaqPageJsonLd,
  buildItemListJsonLd,
  siteNavigationJsonLd,
  PRIMARY_NAV,
  SITE,
} from '../components/Seo'
import Preloader from '../components/Preloader'
import Banner from '../components/Banner'
import OurServices from '../components/OurServices'
import OurWork from '../components/OurWork'
import MissionVision from '../components/MissionVision'
import WhyChooseUs from '../components/WhyChooseUs'
import OurProcess from '../components/OurProcess'
import Testimonials, { homeFaqs } from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import TechStack from '../components/TechStack'
import StartProject from '../components/StartProject'

const homeFaqJsonLd = buildFaqPageJsonLd(homeFaqs, `${SITE.baseUrl}/`)

// Primary destinations as an ItemList - strongest hint we can give for sitelinks.
const primaryDestinationsJsonLd = buildItemListJsonLd({
  name: 'Tech Career IT Solutions - Main Sections',
  description: 'Primary navigation destinations on techcareer.site.',
  url: `${SITE.baseUrl}/`,
  items: PRIMARY_NAV.filter((n) => n.path !== '/').map((n) => ({
    name: n.name,
    description: n.description,
    url: `${SITE.baseUrl}${n.path}`,
  })),
})

const Home = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
    {/* Secondary FAQPage JSON-LD for "People also ask" rich results */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
    />
    {/* SiteNavigationElement - declares primary site links for sitelink generation */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
    />
    {/* Primary-destinations ItemList - additional sitelinks hint */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(primaryDestinationsJsonLd) }}
    />
    {/* <Preloader /> */}
    <Banner />
    <OurServices />
    {/* <OurWork /> */}
    {/* <MissionVision /> */}
    <WhyChooseUs />
    <TechStack />
    <OurProcess />
    <Testimonials />
    {/* <BlogSection /> */}
    <StartProject />
  </>
)

export default Home