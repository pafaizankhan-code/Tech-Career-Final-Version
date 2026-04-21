import React from 'react'
import { useLocation } from 'react-router-dom'

// Site-wide constants. Update these if the domain/brand changes.
export const SITE = {
  name: 'Tech Career IT Solutions',
  brand: 'Tech Career IT Solutions LLP',
  tagline: 'Web Development & Digital Marketing Agency in Ahmedabad',
  baseUrl: 'https://tech-career-final-version.vercel.app',
  defaultImage: 'https://tech-career-final-version.vercel.app/og-default.jpg',
  twitter: '@techcareerllp',
  region: 'IN',
  locale: 'en_IN',
  phone: '+91 70966 08771',
  email: 'inquiry.techcareer@gmail.com',
}

// Render-time SEO primitive. Uses React 19 native head hoisting — no extra dependencies.
const Seo = ({
  title,
  description,
  keywords,
  robots = 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  canonical,
  ogType = 'website',
  ogImage,
  jsonLd,
  noindex = false,
}) => {
  const location = useLocation()
  const path = location.pathname === '/' ? '' : location.pathname
  const url = canonical || `${SITE.baseUrl}${path}`
  const image = ogImage || SITE.defaultImage
  const finalRobots = noindex ? 'noindex,nofollow' : robots
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`

  return (
    <>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={finalRobots} />
      <meta name="googlebot" content={finalRobots} />
      <meta name="author" content={SITE.brand} />
      <meta name="publisher" content={SITE.brand} />

      {/* Geo / regional signals (India focus — Ahmedabad) */}
      <meta name="geo.region" content={SITE.region} />
      <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
      <meta name="ICBM" content="23.0225,72.5714" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-IN" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:creator" content={SITE.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  )
}

// Reusable Organization / LocalBusiness schema — injected on the Home page.
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.baseUrl}/#organization`,
  name: SITE.brand,
  alternateName: SITE.name,
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/logo.png`,
  image: SITE.defaultImage,
  description:
    'Tech Career IT Solutions LLP — a founder-led web development, e-commerce, custom CRM / HRMS, mobile app and digital marketing agency based in Ahmedabad, India.',
  foundingDate: '2025',
  slogan: 'Crafting Digital Excellence from Ahmedabad.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'iHub, University Area',
    addressLocality: 'Ahmedabad',
    addressRegion: 'GJ',
    postalCode: '380015',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    email: SITE.email,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
  sameAs: [
    'https://www.instagram.com/techcareer.llp',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'India',
  },
}

// Build a Service JSON-LD block for service detail pages
export const buildServiceJsonLd = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.title,
  provider: {
    '@type': 'ProfessionalService',
    name: SITE.brand,
    url: SITE.baseUrl,
  },
  areaServed: { '@type': 'Country', name: 'India' },
  description: service.intro,
  url: `${SITE.baseUrl}/services/${service.slug}`,
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: service.pricing?.[0]?.price?.replace(/[^\d]/g, '') || '',
    highPrice: service.pricing?.[service.pricing.length - 1]?.price?.replace(/[^\d]/g, '') || '',
    priceCurrency: 'INR',
    offerCount: service.pricing?.length || 3,
  },
})

// Breadcrumb JSON-LD
export const buildBreadcrumbJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE.baseUrl}${it.path}`,
  })),
})

export default Seo
