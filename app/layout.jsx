import './globals.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tech Career IT Solutions LLP - Ahmedabad',
    template: '%s | Tech Career IT Solutions LLP',
  },
  description:
    'Tech Career IT Solutions LLP - custom website, custom software, custom mobile app, e-commerce, CRM/HRMS and digital marketing company in Ahmedabad, India. SEO-ready builds, transparent pricing, founder-led delivery.',
  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
  category: 'Technology',
  keywords: [
    'custom website', 'custom website development', 'custom website company in Ahmedabad',
    'custom software', 'custom software development', 'custom software company in Ahmedabad',
    'custom app', 'custom mobile app', 'custom mobile app development',
    'website development company in Ahmedabad', 'web development agency India',
    'mobile app development company in Ahmedabad', 'iOS app developer', 'Android app developer',
    'ecommerce website development', 'Shopify development company', 'WooCommerce developer',
    'CRM software development', 'HRMS software development', 'ERP software India',
    'digital marketing agency in Ahmedabad', 'SEO services Ahmedabad', 'Google Ads agency India',
    'UI UX design agency Ahmedabad', 'brand identity designer', 'logo design Ahmedabad',
    'Next.js development company', 'React development company India', 'WordPress developer',
    'best web development company in Ahmedabad', 'top software company in Gujarat',
    'Tech Career', 'Tech Career IT Solutions', 'Tech Career IT Solutions LLP', 'techcareer',
  ],
  alternates: {
    canonical: '/',
    languages: { 'en-IN': '/', 'x-default': '/' },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Custom Web, App & Software | Tech Career IT Solutions LLP',
    description:
      'Custom websites, custom software, custom mobile apps, e-commerce, CRM/HRMS & digital marketing by Tech Career IT Solutions LLP - Ahmedabad, India.',
    url: `${SITE_URL}/`,
    siteName: BRAND,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: BRAND }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@techcareerllp',
    creator: '@techcareerllp',
    title: 'Custom Website, Software & Mobile App Development in Ahmedabad',
    description:
      'Custom websites, software, mobile apps, e-commerce, CRM/HRMS & digital marketing - Tech Career IT Solutions LLP, Ahmedabad.',
    images: ['/og-default.jpg'],
  },
  verification: {
    google: 'd40hCY9SQf3jifziaWxk7i7Bru80ZF5JvH7j-3FQH9A',
  },
  other: {
    'theme-color': '#097CF4',
    'msapplication-TileColor': '#097CF4',
    'msapplication-TileImage': '/favicon-192x192.png',
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad, Gujarat, India',
    'geo.position': '23.0225;72.5714',
    ICBM: '23.0225,72.5714',
    'apple-mobile-web-app-title': 'Tech Career IT',
    rating: 'general',
    distribution: 'global',
    language: 'English',
    'content-language': 'en-IN',
    'revisit-after': '3 days',
  },
}

// ─── Site-wide WebSite JSON-LD (with sitelinks searchbox) ───────────────
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Tech Career IT Solutions',
  alternateName: ['Tech Career', BRAND, 'TechCareer'],
  description:
    'Custom website, custom software, custom mobile app, e-commerce, CRM/HRMS & digital marketing agency in Ahmedabad, India.',
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

// ─── Full LocalBusiness / ProfessionalService JSON-LD ───────────────────
// Server-rendered so Google sees the rich entity data on every page.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
  '@id': `${SITE_URL}/#organization`,
  name: BRAND,
  alternateName: ['Tech Career', 'Tech Career IT Solutions', 'TechCareer'],
  legalName: BRAND,
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/favicon-512x512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-default.jpg`,
  description:
    'Tech Career IT Solutions LLP - founder-led custom website, custom software, custom mobile app, e-commerce, CRM/HRMS and digital marketing company in Ahmedabad, India.',
  slogan: 'Crafting Digital Excellence from Ahmedabad.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#founder`,
    name: 'Faizan Pathan',
    jobTitle: 'Founder',
  },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 10 },
  knowsAbout: [
    'Custom Website Development', 'Custom Software Development', 'Custom Mobile App Development',
    'Web Development', 'E-commerce Development', 'Shopify Development', 'WooCommerce Development',
    'CRM Software', 'HRMS Software', 'ERP Software', 'React Native Development',
    'Next.js Development', 'React Development', 'WordPress Development',
    'UI/UX Design', 'Brand Identity Design', 'Logo Design',
    'Search Engine Optimization', 'Digital Marketing', 'Google Ads', 'Meta Ads',
    'Social Media Marketing', 'Content Marketing',
  ],
  knowsLanguage: ['en', 'hi', 'gu'],
  priceRange: '₹₹',
  paymentAccepted: ['UPI', 'Bank Transfer', 'Credit Card', 'Debit Card', 'Razorpay'],
  currenciesAccepted: ['INR', 'USD'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'iHub, University Area',
    addressLocality: 'Ahmedabad',
    addressRegion: 'GJ',
    postalCode: '380015',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 23.0225, longitude: 72.5714 },
  hasMap: 'https://www.google.com/maps/place/Ahmedabad,+Gujarat',
  telephone: '+91 70966 08771',
  email: 'inquiry.techcareer@gmail.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91 70966 08771',
      email: 'inquiry.techcareer@gmail.com',
      contactType: 'sales',
      areaServed: ['IN', 'US', 'AU', 'GB'],
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91 70966 08771',
      email: 'inquiry.techcareer@gmail.com',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/techcareer.llp',
    'https://www.linkedin.com/company/tech-career-it-solutions-llp/',
    'https://wa.me/917096608771',
  ],
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'AdministrativeArea', name: 'Gujarat' },
    { '@type': 'City', name: 'Ahmedabad' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 23.0225, longitude: 72.5714 },
    geoRadius: '20000000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tech Career IT Solutions LLP - Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Web & Product',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Development', url: `${SITE_URL}/services/web-development` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Development', url: `${SITE_URL}/services/ecommerce` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Mobile App Development', url: `${SITE_URL}/services/mobile-apps` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Business Software',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software & CRM Development', url: `${SITE_URL}/services/custom-software` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HRMS Software Development', url: `${SITE_URL}/services/hrms` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Design',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI / UX Design', url: `${SITE_URL}/services/ui-ux-design` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity & Logo', url: `${SITE_URL}/services/brand-identity` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Marketing',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Digital Marketing', url: `${SITE_URL}/services/digital-marketing` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google & Meta Ads', url: `${SITE_URL}/services/paid-ads` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing', url: `${SITE_URL}/services/social-media` } },
        ],
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "You need to enable JavaScript to run this app. Tech Career IT Solutions LLP - Web Development &amp; Digital Marketing Agency in Ahmedabad, India.",
          }}
        />
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <ScrollToTop />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
