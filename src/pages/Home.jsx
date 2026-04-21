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
      title="Web Development & Digital Marketing Agency in Ahmedabad"
      description="Tech Career IT Solutions LLP — a founder-led studio in Ahmedabad building websites, e-commerce stores, custom CRM / HRMS, mobile apps and digital marketing campaigns. Transparent pricing. Open for new projects."
      keywords="web development ahmedabad, digital marketing agency ahmedabad, ecommerce website ahmedabad, custom crm hrms india, shopify developer gujarat, react developer ahmedabad, mobile app development india, wordpress developer ahmedabad, tech career it solutions llp"
      canonical="https://tech-career-final-version.vercel.app/"
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
