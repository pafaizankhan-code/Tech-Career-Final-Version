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
  name: 'Contact Tech Career IT Solutions',
  description:
    'Reach Australia\u2019s best IT company. Reply within 4 business hours. Offices in Sydney, Melbourne.',
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
    areaServed: 'AU',
    availableLanguage: ['English'],
  },
}

const Contact = () => (
  <>
    <Seo
      title="Contact Us — Tech Career IT Solutions | Sydney, Melbourne"
      description="Get in touch with Australia's top IT company. 4-hour reply SLA. Email, phone, WhatsApp, or book a 30-minute discovery call — we read every message."
      keywords="contact IT company Australia, IT consultancy Sydney contact, software development Melbourne contact, Australian IT quote, book IT discovery call, IT support Australia"
      canonical="https://techcareerit.com.au/contact"
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
