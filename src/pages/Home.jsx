import React from 'react'
import Seo, { organizationJsonLd } from '../components/Seo'
import Preloader from '../components/Preloader'
import Banner from '../components/Banner'
import OurServices from '../components/OurServices'
import OurWork from '../components/OurWork'
import WhyChooseUs from '../components/WhyChooseUs'
import OurProcess from '../components/OurProcess'
import Testimonials from '../components/Testimonials'
import StartProject from '../components/StartProject'

const Home = () => (
  <>
    <Seo
      title="Best IT Company in Australia — Software, Cloud, AI & Cybersecurity"
      description="Tech Career IT Solutions is Australia's premier IT consultancy for custom software, cloud, AI, and cybersecurity. ISO 27001 & SOC 2 certified. 250+ projects delivered."
      keywords="best IT company Australia, top IT consultancy Sydney, software development Melbourne, enterprise IT Australia, cloud consulting AU, AI development Australia, cybersecurity Australia, ISO 27001 IT partner, SOC 2 consultants, custom software Sydney"
      canonical="https://techcareerit.com.au/"
      jsonLd={organizationJsonLd}
    />
    <Preloader />
    <Banner />
    <OurServices />
    <OurWork />
    <WhyChooseUs />
    <OurProcess />
    <Testimonials />
    <StartProject />
  </>
)

export default Home
