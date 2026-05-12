import Portfolio from '../../src/views/Portfolio'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export const metadata = {
  title: 'Portfolio & Case Studies',
  description:
    'Selected case studies from Tech Career IT Solutions LLP — custom websites, e-commerce stores, mobile apps, CRM/HRMS software and brand identity work built for clients across India.',
  keywords: [
    'web development portfolio Ahmedabad', 'app development case studies India',
    'custom software case studies', 'ecommerce website portfolio',
    'Shopify store portfolio India', 'CRM portfolio',
    'brand identity portfolio Ahmedabad', 'Tech Career IT portfolio',
  ],
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — Tech Career IT Solutions LLP',
    description:
      'Custom websites, e-commerce, mobile apps, software and brand identity case studies from Tech Career IT Solutions LLP, Ahmedabad.',
    url: `${SITE_URL}/portfolio`,
    siteName: BRAND,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: BRAND }],
  },
}

export default function PortfolioPage() {
  return <Portfolio />
}
