'use client'

import React from 'react'
import { buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import LegalLayout from '../components/LegalLayout'

const LAST_UPDATED = '22 April 2026'

const cookiesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE.baseUrl}/cookies`,
  name: 'Cookies Policy - Tech Career IT Solutions LLP',
  description:
    'How techcareer.site uses cookies and similar technologies, what they are used for, and how you can control them in your browser.',
  url: `${SITE.baseUrl}/cookies`,
  dateModified: '2026-04-22',
  inLanguage: 'en-IN',
  isPartOf: { '@id': `${SITE.baseUrl}/#website` },
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Cookies Policy', path: '/cookies' },
  ]),
}

const sections = [
  {
    id: 'what-are-cookies',
    title: 'What are cookies',
    body: (
      <>
        <p>
          Cookies are small text files stored on your device when you visit a website. They are
          widely used to make sites work, or work more efficiently, as well as to provide
          reporting information. Similar technologies - local storage, pixels - are covered by
          this policy.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use cookies',
    body: (
      <>
        <p>
          <a href="https://www.techcareer.site" className="text-[#097CF4] font-semibold hover:underline">techcareer.site</a>{' '}
          uses a minimal set of cookies to keep the site fast, secure and measurable. We never
          use cookies to track you across unrelated websites or for profile-based ad targeting.
        </p>
      </>
    ),
  },
  {
    id: 'types',
    title: 'Types of cookies we use',
    body: (
      <>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Strictly necessary</strong> - enable core features such as page navigation,
            form security tokens and load balancing. These cannot be switched off.
          </li>
          <li>
            <strong>Preferences</strong> - remember your language and theme choices so the site
            feels consistent between visits.
          </li>
          <li>
            <strong>Analytics</strong> - help us understand which pages are useful, so we can
            improve them. We use privacy-respecting analytics that anonymise IP addresses and
            avoid cross-site tracking.
          </li>
          <li>
            <strong>Security</strong> - used by our CDN and firewall partners (e.g. Cloudflare)
            to protect the site from abuse.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-party cookies',
    body: (
      <>
        <p>
          Some pages embed content from third parties such as Google Fonts, YouTube or social
          platforms. These providers may set their own cookies, governed by their own privacy
          policies. We load embeds lazily and, where possible, in privacy-enhanced modes.
        </p>
      </>
    ),
  },
  {
    id: 'managing',
    title: 'Managing and disabling cookies',
    body: (
      <>
        <p>
          You can control cookies through your browser settings - accept, block, or delete them.
          Help pages for popular browsers:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Chrome · Settings → Privacy and security → Cookies and other site data</li>
          <li>Safari · Preferences → Privacy → Manage Website Data</li>
          <li>Firefox · Settings → Privacy &amp; Security → Cookies and Site Data</li>
          <li>Edge · Settings → Cookies and site permissions → Manage and delete cookies</li>
        </ul>
        <p>
          If you block strictly-necessary cookies, parts of the website may not function as
          intended (for example, submitting the contact form).
        </p>
      </>
    ),
  },
  {
    id: 'do-not-track',
    title: '"Do Not Track" signals',
    body: (
      <>
        <p>
          We honour the Global Privacy Control (GPC) signal sent by supported browsers and
          extensions by disabling non-essential analytics for that visit.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <>
        <p>
          We may update this Cookies Policy when we add or remove tools. The "Last Updated" date
          shows when this page was last revised. For material changes we will highlight the
          update on this page.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <>
        <p>
          Tech Career IT Solutions LLP<br />
          iHub, University Area, Ahmedabad, Gujarat 380015, India<br />
          Email:{' '}
          <a href="mailto:inquiry.techcareer@gmail.com" className="text-[#097CF4] font-semibold hover:underline">
            inquiry.techcareer@gmail.com
          </a>
          <br />
          Phone: +91 70966 08771
        </p>
      </>
    ),
  },
]

const Cookies = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiesJsonLd) }}
    />
    <LegalLayout
      breadcrumb="Cookies Policy"
      eyebrow="Legal · Cookies"
      title="Cookies Policy"
      intro="We keep cookies to a minimum - only what's needed to run the site, remember your preferences and learn what's working. Here is exactly what we use and how you can control it."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  </>
)

export default Cookies