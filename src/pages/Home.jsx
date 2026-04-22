import React from 'react'
import Seo, { organizationJsonLd, buildFaqPageJsonLd, SITE } from '../components/Seo'
import Preloader from '../components/Preloader'
import Banner from '../components/Banner'
import OurServices from '../components/OurServices'
import OurWork from '../components/OurWork'
import WhyChooseUs from '../components/WhyChooseUs'
import OurProcess from '../components/OurProcess'
import Testimonials, { homeFaqs } from '../components/Testimonials'
import StartProject from '../components/StartProject'

const homeFaqJsonLd = buildFaqPageJsonLd(homeFaqs, `${SITE.baseUrl}/`)

const Home = () => (
  <>
    <Seo
      title="Web Development & Digital Marketing Agency in Ahmedabad | Custom Websites, E-commerce & Branding"
      description="Looking for a reliable web development agency in Ahmedabad? Tech Career IT Solutions delivers custom websites, e-commerce stores, UI/UX design, mobile apps & digital marketing to grow your business online."
      canonical="https://www.techcareer.site/"
      jsonLd={organizationJsonLd}
    />
    {/* Secondary FAQPage JSON-LD for "People also ask" rich results */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
    />
    <Preloader />
    <Banner />
    <OurServices />
    {/* <OurWork /> */}
    <WhyChooseUs />
    <OurProcess />
    <Testimonials />
    <StartProject />
  </>
)

export default Home
