'use client'

import React from 'react'
import { buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import LegalLayout from '../components/LegalLayout'

const LAST_UPDATED = '22 April 2026'

const privacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE.baseUrl}/privacy`,
  name: 'Privacy Policy - Tech Career IT Solutions LLP',
  description:
    'How Tech Career IT Solutions LLP collects, uses, stores and protects your personal information when you use techcareer.site and our services.',
  url: `${SITE.baseUrl}/privacy`,
  dateModified: '2026-04-22',
  inLanguage: 'en-IN',
  isPartOf: { '@id': `${SITE.baseUrl}/#website` },
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
  ]),
}

const sections = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          This Privacy Policy explains how <strong>Tech Career IT Solutions LLP</strong>
          {' '}("Tech Career", "we", "us" or "our") handles personal information on the website
          {' '}<a href="https://www.techcareer.site" className="text-[#097CF4] font-semibold hover:underline">techcareer.site</a>
          {' '}and any related services, proposals and engagements.
        </p>
        <p>
          We are a web development and digital marketing studio based in Ahmedabad, Gujarat, India.
          We comply with the Digital Personal Data Protection Act, 2023 (India) and, where
          applicable, the EU GDPR.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <p>We collect only the data we need to run our studio and serve you well:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Contact data</strong> - name, email, phone, company, country - submitted through our contact form, WhatsApp or email.</li>
          <li><strong>Project data</strong> - brief, scope, brand assets and content you share so we can deliver the work.</li>
          <li><strong>Billing data</strong> - GSTIN, invoicing address and payment references, processed through regulated Indian payment providers.</li>
          <li><strong>Usage data</strong> - pages visited, device type, approximate location and referral source, collected via privacy-friendly analytics.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    body: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>Respond to enquiries and prepare proposals.</li>
          <li>Deliver, maintain and improve the services you hire us for.</li>
          <li>Issue invoices and maintain statutory records (Indian GST / Companies Act).</li>
          <li>Send project updates and, if you opt in, the monthly newsletter.</li>
          <li>Secure the website and prevent fraud or abuse.</li>
        </ul>
        <p>We never sell or rent your personal data.</p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Legal basis for processing',
    body: (
      <>
        <p>
          We process personal data on one of these grounds: your consent (e.g. newsletter);
          performance of a contract (e.g. delivering a project); compliance with a legal obligation
          (e.g. tax records); or our legitimate interest in operating a secure, well-run studio.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'How we share your information',
    body: (
      <>
        <p>We share data only with carefully selected processors who help us run the studio:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hosting and infrastructure providers (e.g. Vercel, AWS, Cloudflare).</li>
          <li>Email, CRM and document tools (e.g. Google Workspace).</li>
          <li>Payment gateways and chartered accountants for billing and compliance.</li>
          <li>Law-enforcement or regulators when legally required.</li>
        </ul>
        <p>Each processor is bound by a written agreement and reasonable security controls.</p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep your data',
    body: (
      <>
        <p>
          We retain contact and project data for the duration of the engagement plus a reasonable
          period to support warranty, portfolio and legal needs. Financial records are kept for at
          least eight years, as required by Indian law. Newsletter data is kept until you unsubscribe.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>
          Subject to applicable law, you have the right to access, correct, update or delete your
          personal information, withdraw consent, restrict processing, and lodge a complaint with
          the relevant data protection authority. To exercise any of these rights, email
          {' '}<a href="mailto:inquiry.techcareer@gmail.com" className="text-[#097CF4] font-semibold hover:underline">inquiry.techcareer@gmail.com</a>.
          We respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <>
        <p>
          We use TLS in transit, encrypted storage at rest, access controls, multi-factor
          authentication and least-privilege principles across our tooling. No online service is
          100% secure, but we keep raising the bar - and we will notify affected users of any
          material breach without undue delay.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: (
      <>
        <p>
          We use a small number of strictly-necessary and analytics cookies. See our{' '}
          <a href="/cookies" className="text-[#097CF4] font-semibold hover:underline">Cookies Policy</a>{' '}
          for the full list and how to control them.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's privacy",
    body: (
      <>
        <p>
          Our services are not directed at children under 18. We do not knowingly collect personal
          data from minors. If you believe a minor has shared information with us, contact us and
          we will delete it.
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
          We may update this policy from time to time. Material changes will be highlighted on this
          page and, where appropriate, by email. The "Last Updated" date reflects the latest revision.
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

const Privacy = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
    />
    <LegalLayout
      breadcrumb="Privacy Policy"
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      intro="Your privacy matters. This policy explains what data we collect, why we collect it, and the choices you have - written in plain language by the same founders who build your product."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  </>
)

export default Privacy