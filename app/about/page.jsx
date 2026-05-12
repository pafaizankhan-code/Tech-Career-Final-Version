import About from '../../src/views/About'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export const metadata = {
  title: 'About — Ahmedabad Web Studio',
  description:
    'Meet Tech Career IT Solutions LLP — a founder-led Ahmedabad studio building custom websites, custom software, custom mobile apps, e-commerce, CRM/HRMS & digital marketing for businesses across India.',
  keywords: [
    'about Tech Career IT Solutions', 'web development agency Ahmedabad',
    'software company in Ahmedabad', 'app development company Ahmedabad',
    'founder-led IT company India', 'Faizan Pathan founder Tech Career',
    'custom software studio Ahmedabad',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Tech Career IT Solutions LLP — Ahmedabad',
    description:
      'A founder-led Ahmedabad studio for custom websites, software, mobile apps, e-commerce, CRM/HRMS and digital marketing.',
    url: `${SITE_URL}/about`,
    siteName: BRAND,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: BRAND }],
  },
}

export default function AboutPage() {
  return <About />
}
