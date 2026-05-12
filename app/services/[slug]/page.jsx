import ServiceDetail from '../../../src/views/ServiceDetail'
import { services, getService } from '../../../src/data/services'
import { notFound } from 'next/navigation'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

// Per-service SEO map - drives titles, descriptions and keyword variants for
// each service detail page. Targets the high-intent search phrases people
// actually type: "custom software development company", "custom website
// developer in Ahmedabad", "mobile app development company near me", etc.
const SERVICE_SEO = {
  'web-development': {
    title: 'Custom Website Development',
    description:
      'Custom website development in Ahmedabad - business websites, web apps & SaaS landings built in Next.js, React & WordPress. SEO-ready, mobile-first, launched in 2–4 weeks.',
    keywords: [
      'custom website development', 'custom website developer', 'custom website',
      'website development company in Ahmedabad', 'web development services Ahmedabad',
      'business website design', 'Next.js development company India',
      'React development company Ahmedabad', 'WordPress website development',
      'web app development company', 'custom web development India',
      'best website developer in Ahmedabad', 'affordable website design Ahmedabad',
    ],
  },
  ecommerce: {
    title: 'E-commerce Development',
    description:
      'E-commerce website development in Ahmedabad - Shopify, WooCommerce & custom D2C stores with Razorpay, UPI, COD, GST invoicing & shipping. Launch-ready in 2–4 weeks.',
    keywords: [
      'ecommerce website development', 'ecommerce development company in Ahmedabad',
      'Shopify development company India', 'custom ecommerce store',
      'WooCommerce developer Ahmedabad', 'online store development',
      'D2C website development', 'Razorpay integration developer',
      'GST ecommerce website', 'best ecommerce developer Ahmedabad',
    ],
  },
  'mobile-apps': {
    title: 'Custom Mobile App Development',
    description:
      'Custom mobile app development in Ahmedabad - iOS & Android apps in React Native and Flutter. Custom apps for startups, retailers and SaaS, shipped to the Play Store and App Store.',
    keywords: [
      'custom app development', 'custom mobile app development', 'custom app developer',
      'mobile app development company in Ahmedabad', 'iOS app development India',
      'Android app development Ahmedabad', 'React Native development company',
      'Flutter app development India', 'app development for startup',
      'cross-platform mobile app developer', 'best mobile app developer Ahmedabad',
    ],
  },
  'custom-software': {
    title: 'Custom Software Development',
    description:
      'Custom software development in Ahmedabad - bespoke CRM, ERP and internal tools tailored to how your team actually works. Web-based, cloud-hosted and easy to maintain.',
    keywords: [
      'custom software', 'custom software development', 'custom software company',
      'custom software development company in Ahmedabad', 'custom CRM development',
      'ERP development company India', 'business software development',
      'enterprise software developer', 'SaaS development company Ahmedabad',
      'internal tools developer', 'custom dashboard developer',
      'bespoke software development India',
    ],
  },
  hrms: {
    title: 'Custom HRMS Development',
    description:
      'Custom HRMS development in Ahmedabad - lightweight HR, attendance, leave and payroll software for growing companies. Web & mobile, GST/PF/ESIC compliant.',
    keywords: [
      'HRMS software development', 'custom HRMS development', 'HR software company India',
      'attendance software developer', 'payroll software Ahmedabad',
      'HRMS development company in Ahmedabad', 'employee management software',
      'leave management software India', 'cloud HR software developer',
    ],
  },
  'ui-ux-design': {
    title: 'UI / UX Design Agency',
    description:
      'UI / UX design agency in Ahmedabad - wireframes, prototypes, design systems and product design for SaaS, web apps and mobile. Figma-first workflow.',
    keywords: [
      'UI UX design agency', 'UI UX designer Ahmedabad', 'product design agency India',
      'mobile app design company', 'SaaS UI design', 'Figma design agency',
      'website UI design Ahmedabad', 'UX design company in Ahmedabad',
    ],
  },
  'brand-identity': {
    title: 'Brand Identity & Logo Design',
    description:
      'Brand identity design in Ahmedabad - logos, brand systems, guidelines and visual identity for startups and growing businesses across India.',
    keywords: [
      'brand identity design', 'logo design Ahmedabad', 'branding agency India',
      'startup branding company', 'visual identity designer Ahmedabad',
      'brand guidelines designer', 'rebranding agency Ahmedabad',
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing & SEO',
    description:
      'Digital marketing agency in Ahmedabad - SEO, content marketing, Google Ads, Meta Ads and lead generation. Monthly reports in plain English, no jargon.',
    keywords: [
      'digital marketing agency in Ahmedabad', 'SEO services Ahmedabad',
      'SEO company India', 'content marketing agency', 'lead generation agency India',
      'best digital marketing agency Ahmedabad', 'small business marketing India',
      'local SEO Ahmedabad', 'SEO expert Ahmedabad',
    ],
  },
  'paid-ads': {
    title: 'Google & Meta Ads Agency',
    description:
      'Performance marketing in Ahmedabad - Google Ads, Meta Ads, YouTube and remarketing campaigns. Weekly optimisation, ROAS-focused, monthly reports.',
    keywords: [
      'Google Ads agency Ahmedabad', 'Meta Ads agency India', 'Facebook ads expert Ahmedabad',
      'PPC agency Ahmedabad', 'performance marketing agency India',
      'ecommerce ads agency', 'YouTube ads agency', 'remarketing campaign agency',
    ],
  },
  'social-media': {
    title: 'Social Media Marketing',
    description:
      'Social media marketing in Ahmedabad - Instagram, LinkedIn, YouTube content, reels, posts and growth. Monthly content calendars and reporting.',
    keywords: [
      'social media agency in Ahmedabad', 'Instagram marketing agency India',
      'social media management company', 'reels content agency', 'LinkedIn marketing Ahmedabad',
      'YouTube growth agency India', 'content calendar agency',
    ],
  },
  'care-retainer': {
    title: 'Website Maintenance & Support',
    description:
      'Post-launch website care in Ahmedabad - bug fixes, security updates, monthly changes and growth work. Simple retainer, predictable monthly cost.',
    keywords: [
      'website maintenance Ahmedabad', 'website support company India',
      'monthly website retainer', 'WordPress maintenance service',
      'website security updates', 'website bug fix service India',
    ],
  },
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const seo = SERVICE_SEO[slug] || {}
  const fallbackIntro = service.intro.slice(0, 155).trim().replace(/[.,;]$/, '')
  const title = seo.title || service.title
  const description = seo.description || `${fallbackIntro}. By ${BRAND} - Ahmedabad.`
  const url = `${SITE_URL}/services/${slug}`
  // OG / Twitter titles bypass the Next.js title.template, so we attach the
  // brand explicitly here so every social preview still says "Tech Career IT Solutions LLP".
  const socialTitle = `${title} | ${BRAND}`

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: BRAND,
      type: 'website',
      locale: 'en_IN',
      images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@techcareerllp',
      creator: '@techcareerllp',
      title: socialTitle,
      description,
      images: ['/og-default.jpg'],
    },
  }
}

const buildJsonLd = (service) => {
  const url = `${SITE_URL}/services/${service.slug}`
  const seo = SERVICE_SEO[service.slug] || {}
  const lowPrice = service.pricing?.[0]?.price?.replace(/[^\d]/g, '') || ''
  const highPrice =
    service.pricing?.[service.pricing.length - 1]?.price?.replace(/[^\d]/g, '') || ''

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: seo.title || service.title,
    serviceType: service.title,
    description: service.intro,
    url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'AdministrativeArea', name: 'Gujarat' },
      { '@type': 'City', name: 'Ahmedabad' },
    ],
    ...(lowPrice && {
      offers: {
        '@type': 'AggregateOffer',
        lowPrice,
        highPrice: highPrice || lowPrice,
        priceCurrency: 'INR',
        offerCount: service.pricing?.length || 3,
      },
    }),
    ...(seo.keywords && { keywords: seo.keywords.join(', ') }),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: url },
    ],
  }

  const faqLd = service.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return [serviceLd, breadcrumbLd, faqLd].filter(Boolean)
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const jsonLdBlocks = buildJsonLd(service)

  return (
    <>
      {jsonLdBlocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <ServiceDetail slug={slug} />
    </>
  )
}
