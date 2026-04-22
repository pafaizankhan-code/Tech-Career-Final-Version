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
      title="Web Development & Digital Marketing Agency in Ahmedabad | Custom Websites, E-commerce & Branding"
      description="Looking for a reliable web development agency in Ahmedabad? Tech Career IT Solutions delivers custom websites, e-commerce stores, UI/UX design, mobile apps & digital marketing to grow your business online."
      canonical="https://techcareer.site/"
      jsonLd={organizationJsonLd}
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
