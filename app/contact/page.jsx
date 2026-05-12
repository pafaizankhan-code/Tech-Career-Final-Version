import Contact from '../../src/views/Contact'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export const metadata = {
  title: 'Contact - Ahmedabad Studio',
  description:
    'Get in touch with Tech Career IT Solutions LLP, Ahmedabad. Book a free discovery call for your next custom website, custom software, custom mobile app or digital marketing project. Reply within 24 hours.',
  keywords: [
    'contact web development company Ahmedabad', 'hire website developer Ahmedabad',
    'hire app developer India', 'hire software developer Ahmedabad',
    'free discovery call website', 'WhatsApp web development Ahmedabad',
    'Tech Career IT contact', 'inquiry web development India',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Tech Career IT Solutions LLP - Ahmedabad',
    description:
      'Talk to Tech Career IT Solutions LLP - Ahmedabad-based custom web, software, app and digital marketing studio. Reply within 24 hours.',
    url: `${SITE_URL}/contact`,
    siteName: BRAND,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: BRAND }],
  },
}

export default function ContactPage() {
  return <Contact />
}
