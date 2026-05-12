import Services from '../../src/views/Services'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export const metadata = {
  title: 'Web, App & Software Services',
  description:
    'Explore our services — custom website development, custom software, custom mobile apps, e-commerce, CRM/HRMS, UI/UX design, brand identity, SEO and digital marketing in Ahmedabad.',
  keywords: [
    'custom website development services', 'custom software development services',
    'custom mobile app development services', 'web development services Ahmedabad',
    'ecommerce development services', 'CRM development services',
    'HRMS development services', 'UI UX design services',
    'digital marketing services Ahmedabad', 'SEO services Ahmedabad',
    'Google Ads services India', 'brand identity design services',
    'IT services company Ahmedabad', 'software development services India',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Web, App & Software Services | Tech Career IT Solutions LLP',
    description:
      'Full-service technology partner — custom web, software, mobile, e-commerce, design and digital marketing from Tech Career IT Solutions, Ahmedabad.',
    url: `${SITE_URL}/services`,
    siteName: BRAND,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: BRAND }],
  },
}

export default function ServicesPage() {
  return <Services />
}
