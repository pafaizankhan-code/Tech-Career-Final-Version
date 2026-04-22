import React from 'react'
import Seo, { buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import LegalLayout from '../components/LegalLayout'

const LAST_UPDATED = '22 April 2026'

const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE.baseUrl}/terms`,
  name: 'Terms of Service — Tech Career IT Solutions',
  description:
    'The terms and conditions that govern use of techcareer.site and the web development, digital marketing and consulting services provided by Tech Career IT Solutions LLP.',
  url: `${SITE.baseUrl}/terms`,
  dateModified: '2026-04-22',
  inLanguage: 'en-IN',
  isPartOf: { '@id': `${SITE.baseUrl}/#website` },
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Terms of Service', path: '/terms' },
  ]),
}

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of terms',
    body: (
      <>
        <p>
          By accessing <a href="https://www.techcareer.site" className="text-[#097CF4] font-semibold hover:underline">techcareer.site</a>{' '}
          or engaging <strong>Tech Career IT Solutions LLP</strong> ("Tech Career", "we", "us")
          for any service, you agree to be bound by these Terms of Service. If you do not agree,
          please do not use the website or our services.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    title: 'Our services',
    body: (
      <>
        <p>
          Tech Career provides web development, e-commerce, custom CRM / HRMS, mobile apps,
          UI / UX design and digital marketing services out of our Ahmedabad studio. Every
          engagement begins with a written scope, a fixed quote or time-and-materials ceiling,
          and change-order rules that are explicit and fair.
        </p>
      </>
    ),
  },
  {
    id: 'client-responsibilities',
    title: 'Client responsibilities',
    body: (
      <>
        <p>To help us deliver on time, the client agrees to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide accurate project information, brand assets and content.</li>
          <li>Review and approve deliverables within the agreed windows.</li>
          <li>Secure necessary rights, licences and approvals for third-party content they provide.</li>
          <li>Pay invoices within the terms stated in the signed proposal.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'payment',
    title: 'Fees and payment terms',
    body: (
      <>
        <p>
          Project fees, instalments and milestones are set in the signed proposal. Unless
          otherwise agreed, invoices are payable within 7 days. Late payments may attract interest
          at 1.5% per month and can pause the engagement until settled. All fees are in INR and
          inclusive / exclusive of GST as stated on the invoice.
        </p>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: (
      <>
        <p>
          On full payment, the client owns the final deliverables and custom source code created
          for the engagement. Tech Career retains ownership of its pre-existing tooling, libraries,
          boilerplates, know-how and methodology, which are licensed to the client on a
          non-exclusive, perpetual basis to use as part of the deliverable.
        </p>
        <p>
          Tech Career may reference the engagement and display non-confidential work in its
          portfolio and marketing unless a written non-disclosure arrangement says otherwise.
        </p>
      </>
    ),
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    body: (
      <>
        <p>
          Each party will treat the other's confidential information with reasonable care and use
          it only for the purposes of the engagement. This obligation survives termination for a
          period of three years, except for information that is public, independently developed or
          lawfully obtained from another source.
        </p>
      </>
    ),
  },
  {
    id: 'warranties',
    title: 'Warranties and disclaimers',
    body: (
      <>
        <p>
          We warrant that our services will be performed in a professional manner and the
          deliverables will materially conform to the agreed scope for 30 days after launch. To
          the fullest extent permitted by law, all other warranties — express or implied — are
          disclaimed. The website and any content are provided on an "as is" basis.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <>
        <p>
          To the fullest extent permitted by law, Tech Career's total aggregate liability for any
          claim arising out of or relating to these Terms or an engagement will not exceed the
          fees paid by the client to Tech Career for the specific engagement giving rise to the
          claim, during the three months preceding the event. We are not liable for indirect,
          incidental, consequential or lost-profits damages.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    body: (
      <>
        <p>
          Either party may terminate an engagement for material breach on 14 days' written notice
          if the breach is not cured in that period. On termination, the client pays for all work
          performed and expenses incurred up to the termination date. Sections on IP,
          confidentiality, warranties, liability and governing law survive termination.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing law and jurisdiction',
    body: (
      <>
        <p>
          These Terms are governed by the laws of India. Any dispute will be submitted to the
          exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat. Parties agree to
          attempt a good-faith resolution before starting formal proceedings.
        </p>
      </>
    ),
  },
  {
    id: 'website-use',
    title: 'Acceptable use of the website',
    body: (
      <>
        <p>
          You agree not to attempt to hack, reverse-engineer, overload, or scrape techcareer.site
          in a way that interferes with other users. You will not upload unlawful, infringing or
          malicious content through any form on the site.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <>
        <p>
          We may update these Terms to reflect new services, legal requirements or operational
          improvements. The latest version will always be at{' '}
          <a href="https://www.techcareer.site/terms" className="text-[#097CF4] font-semibold hover:underline">
            techcareer.site/terms
          </a>{' '}
          with the "Last Updated" date. Continued use of the website or services after changes
          means you accept the updated Terms.
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

const Terms = () => (
  <>
    <Seo
      title="Terms of Service | Tech Career IT Solutions — Ahmedabad"
      description="Read the Terms of Service governing use of techcareer.site and engagements with Tech Career IT Solutions — an Ahmedabad web development and digital marketing studio."
      canonical="https://www.techcareer.site/terms"
      ogType="article"
      jsonLd={termsJsonLd}
    />
    <LegalLayout
      breadcrumb="Terms of Service"
      eyebrow="Legal · Terms"
      title="Terms of Service"
      intro="These Terms set the rules of engagement between Tech Career IT Solutions LLP and the businesses that hire us — written plainly so there are no surprises when the work begins."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  </>
)

export default Terms
