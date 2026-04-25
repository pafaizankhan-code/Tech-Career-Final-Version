import React from 'react'
import { Link } from 'react-router-dom'
import Seo, {
  buildBreadcrumbJsonLd,
  buildItemListJsonLd,
  PRIMARY_NAV,
  SECONDARY_NAV,
  SITE,
} from '../components/Seo'
import { services as serviceData, categories as serviceCategories } from '../data/services'

const sitemapItems = [
  {
    title: 'Main Pages',
    blurb: 'Start here — the core of techcareer.site.',
    links: PRIMARY_NAV,
  },
  {
    title: 'Services',
    blurb: 'Every service we offer from our Ahmedabad studio.',
    links: serviceData.map((s) => ({
      name: s.title,
      path: `/services/${s.slug}`,
      description: s.short,
    })),
  },
  {
    title: 'Service Categories',
    blurb: 'Browse services grouped by practice area.',
    links: serviceCategories.map((c) => ({
      name: c.label,
      path: `/services#${c.key}`,
      description: c.tagline,
    })),
  },
  {
    title: 'Legal',
    blurb: 'Policies that govern use of this site and our work.',
    links: [
      { name: 'Privacy Policy', path: '/privacy', description: 'How we collect, use and protect your data.' },
      { name: 'Terms of Service', path: '/terms', description: 'The rules of engagement for our services.' },
      { name: 'Cookies Policy', path: '/cookies', description: 'How techcareer.site uses cookies.' },
    ],
  },
]

const sitemapJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE.baseUrl}/sitemap`,
  name: 'Sitemap — Tech Career IT Solutions',
  description:
    'A complete, browsable map of techcareer.site — main pages, every service, legal policies and machine-readable XML sitemap.',
  url: `${SITE.baseUrl}/sitemap`,
  inLanguage: 'en-IN',
  isPartOf: { '@id': `${SITE.baseUrl}/#website` },
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Sitemap', path: '/sitemap' },
  ]),
}

const sitemapItemListJsonLd = buildItemListJsonLd({
  name: 'Tech Career IT Solutions — Sitemap',
  description: 'All pages on techcareer.site.',
  url: `${SITE.baseUrl}/sitemap`,
  items: [
    ...PRIMARY_NAV.filter((n) => n.path !== '/'),
    ...SECONDARY_NAV,
    { name: 'Privacy Policy', path: '/privacy', description: 'How we collect, use and protect your data.' },
    { name: 'Terms of Service', path: '/terms', description: 'The rules of engagement for our services.' },
    { name: 'Cookies Policy', path: '/cookies', description: 'How techcareer.site uses cookies.' },
  ].map((n) => ({
    name: n.name,
    description: n.description,
    url: `${SITE.baseUrl}${n.path}`,
  })),
})

const Sitemap = () => (
  <div style={{ fontFamily: 'Inter, sans-serif' }}>
    <Seo
      title="Sitemap | Tech Career IT Solutions — Ahmedabad Web & Marketing Agency"
      description="Browse the full Tech Career IT Solutions sitemap — every page, service and resource on techcareer.site, organised for quick access."
      canonical="https://www.techcareer.site/sitemap"
      jsonLd={sitemapJsonLd}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapItemListJsonLd) }}
    />

    {/* ─── HERO ──────────────────────────────────────── */}
    <section className="relative bg-white pt-20 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <nav
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black/50 mb-10"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <Link to="/" className="hover:text-[#097CF4]">Home</Link>
          <span>/</span>
          <span className="text-black font-semibold">Sitemap</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Sitemap · Every page on techcareer.site
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[88px] font-extrabold text-black leading-[0.98] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The whole <span className="text-[#097CF4] italic">studio</span>, mapped.
            </h1>

            <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[720px]">
              A clean, browsable index of every page on techcareer.site — main sections, services,
              service categories and legal policies. Need the machine-readable version?{' '}
              <a
                href="/sitemap.xml"
                className="text-[#097CF4] font-semibold hover:underline"
              >
                Open sitemap.xml →
              </a>
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="relative bg-black text-white p-6 lg:p-7 shadow-[10px_10px_0_0_#097CF4]">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Quick stats
              </p>
              <p className="text-[42px] font-extrabold leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                {sitemapItems.reduce((acc, s) => acc + s.links.length, 0)}
                <span className="text-[#097CF4]">.</span>
              </p>
              <p
                className="mt-3 text-[11px] uppercase tracking-[0.25em] text-white/70"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Indexable Pages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── INDEX ─────────────────────────────────────── */}
    <section className="relative bg-white pb-20 lg:pb-28">
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 space-y-16 lg:space-y-20">
        {sitemapItems.map((group, gi) => (
          <section key={group.title} aria-labelledby={`sitemap-${gi}`}>
            <div className="flex items-baseline gap-4 mb-6">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — {String(gi + 1).padStart(2, '0')} / {String(sitemapItems.length).padStart(2, '0')}
              </span>
              <h2
                id={`sitemap-${gi}`}
                className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-black leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {group.title}
              </h2>
            </div>
            <p className="text-[14px] text-black/65 max-w-[640px] mb-8 pl-0 sm:pl-12">
              {group.blurb}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
              {group.links.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="group block p-5 lg:p-6 border-r border-b border-black/10 bg-white hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="text-[18px] lg:text-[20px] font-extrabold leading-tight tracking-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {l.name}
                      </h3>
                      <span className="shrink-0 w-7 h-7 border border-black/15 group-hover:border-white/40 flex items-center justify-center text-black/40 group-hover:text-white transition-colors">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                    {l.description && (
                      <p className="mt-2 text-[12.5px] leading-[1.6] text-black/60 group-hover:text-white/70 transition-colors">
                        {l.description}
                      </p>
                    )}
                    <p
                      className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#097CF4]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {l.path}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  </div>
)

export default Sitemap
