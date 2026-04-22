import React from 'react'
import { useLocation } from 'react-router-dom'

// Site-wide constants. Update these if the domain/brand changes.
export const SITE = {
  name: 'Tech Career IT Solutions',
  brand: 'Tech Career IT Solutions LLP',
  tagline: 'Web Development & Digital Marketing Agency in Ahmedabad',
  baseUrl: 'https://www.techcareer.site',
  defaultImage: 'https://www.techcareer.site/og-default.jpg',
  twitter: '@techcareerllp',
  region: 'IN-GJ',
  locale: 'en_IN',
  phone: '+91 70966 08771',
  email: 'inquiry.techcareer@gmail.com',
}

// Render-time SEO primitive. Uses React 19 native head hoisting — no extra dependencies.
const Seo = ({
  title,
  description,
  robots = 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  canonical,
  ogType = 'website',
  ogImage,
  jsonLd,
  noindex = false,
}) => {
  const location = useLocation()
  const path = location.pathname === '/' ? '/' : location.pathname
  // Canonical is self-referencing by default (current absolute URL), exactly like the Levox reference.
  const url = canonical || `${SITE.baseUrl}${path}`
  const image = ogImage || SITE.defaultImage
  const finalRobots = noindex ? 'noindex,nofollow' : robots
  const fullTitle = title.includes(SITE.name) ? title : `${title} – ${SITE.name}`

  return (
    <>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={finalRobots} />
      <meta name="googlebot" content={finalRobots} />
      <meta name="author" content={SITE.brand} />
      <meta name="publisher" content={SITE.brand} />

      {/* Geo / regional signals (India focus — Ahmedabad) */}
      <meta name="geo.region" content={SITE.region} />
      <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225,72.5714" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-IN" />

      {/* Canonical — self-referencing */}
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
  '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
  '@id': `${SITE.baseUrl}/#organization`,
  name: SITE.brand,
  alternateName: SITE.name,
  legalName: SITE.brand,
  url: SITE.baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.baseUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  image: SITE.defaultImage,
  description:
    'Tech Career IT Solutions LLP — a founder-led web development, e-commerce, custom CRM / HRMS, mobile app and digital marketing agency based in Ahmedabad, India.',
  slogan: 'Crafting Digital Excellence from Ahmedabad.',
  foundingDate: '2025',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
  },
  founder: {
    '@type': 'Person',
    '@id': `${SITE.baseUrl}/about#founder`,
    name: 'Faizan Pathan',
    jobTitle: 'Founder',
    worksFor: { '@id': `${SITE.baseUrl}/#organization` },
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 2,
    maxValue: 10,
  },
  knowsAbout: [
    'Web Development',
    'E-commerce Development',
    'Shopify Development',
    'WooCommerce Development',
    'Custom CRM Software',
    'HRMS Software',
    'Mobile App Development',
    'React Development',
    'Next.js Development',
    'UI/UX Design',
    'Brand Identity Design',
    'Search Engine Optimization',
    'Digital Marketing',
    'Paid Advertising',
    'Social Media Marketing',
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
      closes: '19:00',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  hasMap: 'https://www.google.com/maps/place/Ahmedabad,+Gujarat',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'sales',
      areaServed: ['IN', 'US', 'AU', 'GB'],
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/techcareer.llp',
  ],
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'AdministrativeArea', name: 'Gujarat' },
    { '@type': 'City', name: 'Ahmedabad' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714,
    },
    geoRadius: '20000000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tech Career IT Solutions — Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Web & Product',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', url: `${SITE.baseUrl}/services/web-development` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Development', url: `${SITE.baseUrl}/services/ecommerce` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development', url: `${SITE.baseUrl}/services/mobile-apps` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Business Software',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software & CRM', url: `${SITE.baseUrl}/services/custom-software` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HRMS', url: `${SITE.baseUrl}/services/hrms` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Design',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI / UX Design', url: `${SITE.baseUrl}/services/ui-ux-design` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity', url: `${SITE.baseUrl}/services/brand-identity` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Marketing',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Digital Marketing', url: `${SITE.baseUrl}/services/digital-marketing` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Ads', url: `${SITE.baseUrl}/services/paid-ads` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media', url: `${SITE.baseUrl}/services/social-media` } },
        ],
      },
    ],
  },
}

// Build an FAQPage JSON-LD from a list of { q, a } entries.
export const buildFaqPageJsonLd = (faqs, pageUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  ...(pageUrl && { url: pageUrl, '@id': `${pageUrl}#faq` }),
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
})

// Build an ItemList of services (used on /services and /portfolio listings).
export const buildItemListJsonLd = ({ name, description, url, items }) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  description,
  url,
  numberOfItems: items.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: it.url,
    name: it.name,
    ...(it.description && { description: it.description }),
  })),
})

// Build a JobPosting JSON-LD entry from a role descriptor.
export const buildJobPostingJsonLd = (job) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  '@id': `${SITE.baseUrl}/careers#job-${job.id}`,
  title: job.title,
  description: job.description,
  datePosted: job.datePosted,
  validThrough: job.validThrough,
  employmentType: job.employmentType, // 'FULL_TIME' | 'INTERN'
  hiringOrganization: {
    '@type': 'Organization',
    name: SITE.brand,
    sameAs: SITE.baseUrl,
    logo: `${SITE.baseUrl}/logo.png`,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'iHub, University Area',
      addressLocality: 'Ahmedabad',
      addressRegion: 'GJ',
      postalCode: '380015',
      addressCountry: 'IN',
    },
  },
  ...(job.remote && {
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: 'India' },
  }),
  experienceRequirements: job.experience,
  industry: 'Information Technology',
  occupationalCategory: job.category,
  directApply: true,
  applicantContact: {
    '@type': 'ContactPoint',
    email: SITE.email,
    contactType: 'HR',
  },
  ...(job.baseSalary && {
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        unitText: job.baseSalary.unit || 'MONTH',
        ...(job.baseSalary.value && { value: job.baseSalary.value }),
        ...(job.baseSalary.minValue && { minValue: job.baseSalary.minValue }),
        ...(job.baseSalary.maxValue && { maxValue: job.baseSalary.maxValue }),
      },
    },
  }),
})

// Build a Person JSON-LD entry (leadership, contributors, etc.).
export const buildPersonJsonLd = (person) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  ...(person.id && { '@id': person.id }),
  name: person.name,
  ...(person.jobTitle && { jobTitle: person.jobTitle }),
  ...(person.description && { description: person.description }),
  ...(person.image && { image: person.image }),
  ...(person.url && { url: person.url }),
  ...(person.sameAs && { sameAs: person.sameAs }),
  worksFor: {
    '@type': 'Organization',
    '@id': `${SITE.baseUrl}/#organization`,
    name: SITE.brand,
    url: SITE.baseUrl,
  },
})

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
