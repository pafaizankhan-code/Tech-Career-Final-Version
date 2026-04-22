import React from 'react'
import Seo, { buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import ContactHero from '../components/contact/ContactHero'
import ContactMethods from '../components/contact/ContactMethods'
import ContactForm from '../components/contact/ContactForm'
import Offices from '../components/contact/Offices'
import ContactFAQ from '../components/contact/ContactFAQ'

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE.baseUrl}/contact`,
  name: 'Contact Tech Career IT Solutions LLP',
  description:
    'Talk to Tech Career IT Solutions LLP — a founder-led web and digital marketing studio at iHub, Ahmedabad. Reply within 24 hours on email and WhatsApp.',
  url: `${SITE.baseUrl}/contact`,
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    email: SITE.email,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
}

const Contact = () => (
  <>
    <Seo
      title="Contact Us | Web Development & Digital Marketing Agency in Ahmedabad"
      description="Contact Tech Career IT Solutions in Ahmedabad for custom websites, e-commerce, CRM/HRMS, mobile apps and digital marketing. Reply within 24 hours on email & WhatsApp — free discovery call, no obligation."
      canonical="https://techcareer.site/contact"
      jsonLd={contactJsonLd}
    />
    <ContactHero />
    <ContactMethods />
    <ContactForm />
    <Offices />
    <ContactFAQ />
  </>
)

export default Contact
