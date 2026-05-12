import Home from '../src/views/Home'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export const metadata = {
  title: {
    absolute: 'Best Web Development Company in Ahmedabad | Tech Career IT Solutions LLP',
  },
  description:
    'Tech Career IT Solutions LLP — Ahmedabad-based company for custom websites, custom software, custom mobile apps, e-commerce, CRM/HRMS and digital marketing. SEO-ready builds, transparent pricing, founder-led delivery.',
  keywords: [
    'custom website', 'custom software', 'custom mobile app',
    'custom website development', 'custom software development', 'custom mobile app development',
    'custom website company in Ahmedabad', 'custom software company in Ahmedabad',
    'mobile app development company in Ahmedabad', 'website development company in Ahmedabad',
    'web development agency India', 'best web development company in Ahmedabad',
    'ecommerce website development', 'Shopify development company',
    'CRM software development', 'HRMS software development',
    'digital marketing agency in Ahmedabad', 'SEO services Ahmedabad',
    'UI UX design agency', 'brand identity designer', 'logo design Ahmedabad',
    'Tech Career', 'Tech Career IT Solutions', 'Tech Career IT Solutions LLP',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Custom Web, App & Software | Tech Career IT Solutions LLP',
    description:
      'Custom websites, software, mobile apps, e-commerce, CRM/HRMS & digital marketing by Tech Career IT Solutions LLP — Ahmedabad, India.',
    url: `${SITE_URL}/`,
    siteName: BRAND,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: BRAND }],
  },
}

export default function HomePage() {
  return <Home />
}
