import Careers from '../../src/views/Careers'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export const metadata = {
  title: 'Careers in Ahmedabad',
  description:
    'Join Tech Career IT Solutions LLP - open roles and internships in Ahmedabad across web development, mobile app development, software engineering, design and digital marketing.',
  keywords: [
    'web developer jobs Ahmedabad', 'React developer jobs Ahmedabad',
    'Next.js developer jobs India', 'mobile app developer jobs Ahmedabad',
    'React Native jobs India', 'UI UX designer jobs Ahmedabad',
    'digital marketing jobs Ahmedabad', 'SEO executive jobs India',
    'internship Ahmedabad IT', 'Tech Career IT careers',
  ],
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Tech Career IT Solutions LLP - Ahmedabad',
    description:
      'Open engineering, design and marketing roles at Tech Career IT Solutions LLP, Ahmedabad. Apply now.',
    url: `${SITE_URL}/careers`,
    siteName: BRAND,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: BRAND }],
  },
}

export default function CareersPage() {
  return <Careers />
}
