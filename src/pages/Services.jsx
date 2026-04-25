import React from 'react'
import { Link } from 'react-router-dom'
import { categories, services, getServicesByCategory } from '../data/services'
import Seo, { buildBreadcrumbJsonLd, buildItemListJsonLd, SITE } from '../components/Seo'
import StartProject from '../components/StartProject'

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Web, E-commerce & Digital Marketing Services in Ahmedabad',
  description:
    'A curated set of services from Tech Career IT Solutions LLP LLP — web development, e-commerce stores, custom CRM / HRMS, mobile apps, UI / UX design and digital marketing, delivered from our studio at iHub, Ahmedabad.',
  url: `${SITE.baseUrl}/services`,
  breadcrumb: buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]),
  hasPart: services.map((s) => ({
    '@type': 'Service',
    name: s.title,
    url: `${SITE.baseUrl}/services/${s.slug}`,
    description: s.short,
    provider: { '@id': `${SITE.baseUrl}/#organization` },
  })),
}

// ItemList — lets Google render a carousel / ordered list of services.
const servicesItemListJsonLd = buildItemListJsonLd({
  name: 'Services offered by Tech Career IT Solutions LLP',
  description:
    'Web development, e-commerce, CRM/HRMS, mobile apps, UI/UX design and digital marketing services.',
  url: `${SITE.baseUrl}/services`,
  items: services.map((s) => ({
    name: s.title,
    description: s.short,
    url: `${SITE.baseUrl}/services/${s.slug}`,
  })),
})

const Services = () => (
  <div style={{ fontFamily: 'Inter, sans-serif' }}>
    <Seo
      title="Our Services | Web Development, E-commerce, CRM/HRMS, Mobile Apps & Digital Marketing in Ahmedabad"
      description="Explore Tech Career IT Solutions LLP' services — custom web development, Shopify & WooCommerce stores, CRM/HRMS software, mobile apps, UI/UX design and SEO-driven digital marketing from our Ahmedabad studio."
      canonical="https://www.techcareer.site/services"
      jsonLd={servicesJsonLd}
    />
    {/* Secondary ItemList JSON-LD for service carousels */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListJsonLd) }}
    />
    {/* ─── HERO ──────────────────────────────────────── */}
    <section className="relative bg-white pt-20 lg:pt-28 pb-16 lg:pb-20 overflow-hidden">
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
          <span className="text-black font-semibold">Services</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Services · 5 Practices · {services.length} Offerings
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[96px] xl:text-[104px] font-extrabold text-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Everything you need,{' '}
              <span className="text-[#097CF4] italic">one</span> honest studio.
            </h1>

            <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[680px]">
              From your first website to custom business software, mobile apps and digital
              marketing — a focused set of services, delivered by a founder-led team in Ahmedabad,
              with fixed quotes and realistic timelines on every engagement.
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
                — Jump to Practice
              </p>
              <ul className="space-y-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {categories.map((c) => (
                  <li key={c.key}>
                    <a
                      href={`#${c.key}`}
                      className="group flex items-center justify-between py-2 border-b border-white/10 last:border-0 hover:text-[#097CF4] transition-colors"
                    >
                      <span className="text-[13px] font-bold uppercase tracking-[0.2em]">
                        {c.label}
                      </span>
                      <svg className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t-2 border-black">
          {[
            { k: '5', v: 'Practices' },
            { k: String(services.length), v: 'Offerings' },
            { k: '2–8 wk', v: 'Typical Timeline' },
            { k: '24h', v: 'Reply Time' },
          ].map((s, i) => (
            <div
              key={s.v}
              className={`py-8 px-1 lg:px-6 ${
                i !== 3 ? 'lg:border-r-2 border-black' : ''
              } ${i < 2 ? 'border-b-2 lg:border-b-0 border-black' : ''} ${
                i % 2 === 1 ? 'border-l-2 lg:border-l-0 border-black' : ''
              }`}
            >
              <p
                className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {s.k}
                <span className="text-[#097CF4]">.</span>
              </p>
              <p
                className="mt-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-black/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── CATEGORY SECTIONS ──────────────────────────── */}
    {categories.map((cat, ci) => {
      const items = getServicesByCategory(cat.key)
      const isDark = ci % 2 === 1
      return (
        <section
          id={cat.key}
          key={cat.key}
          className={`relative py-20 lg:py-28 overflow-hidden ${
            isDark ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(to right, ${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          ></div>

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
              <div className="max-w-[720px]">
                <div
                  className="inline-flex items-center gap-3 mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className="w-10 h-px bg-[#097CF4]"></span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                    Practice · 0{ci + 1} / 0{categories.length}
                  </span>
                </div>

                <h2
                  className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.02em]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {cat.label.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-[#097CF4] italic">
                    {cat.label.split(' ').slice(-1).join('')}
                  </span>
                </h2>

                <p className={`mt-5 text-[15px] leading-[1.7] max-w-[560px] ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                  {cat.tagline}
                </p>
              </div>

              <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${isDark ? 'text-white/50' : 'text-black/50'}`} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {items.length} offerings
              </span>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 border-t border-l ${isDark ? 'border-white/15' : 'border-black/10'}`}>
              {items.map((s, i) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={`group relative p-6 lg:p-8 border-r border-b transition-colors duration-500 ${
                    isDark
                      ? 'border-white/15 bg-black hover:bg-[#097CF4]'
                      : 'border-black/10 bg-white hover:bg-black hover:text-white'
                  }`}
                >
                  <span className={`pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 ${isDark ? 'border-white/30 group-hover:border-white' : 'border-black/20 group-hover:border-[#097CF4]'} transition-colors`}></span>
                  <span className={`pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 ${isDark ? 'border-white/30 group-hover:border-white' : 'border-black/20 group-hover:border-[#097CF4]'} transition-colors`}></span>

                  <div className="flex items-start justify-between mb-8">
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 font-extrabold text-[14px] ${
                        isDark
                          ? 'bg-[#097CF4] text-white group-hover:bg-white group-hover:text-[#097CF4]'
                          : 'bg-black text-white group-hover:bg-[#097CF4]'
                      } transition-colors`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      0{i + 1}
                    </span>
                    <svg className={`w-4 h-4 ${isDark ? 'text-white/40' : 'text-black/30'} group-hover:text-[#097CF4] group-hover:translate-x-0 -translate-x-1 transition-all`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>

                  <h3
                    className="text-[22px] lg:text-[26px] font-extrabold leading-tight tracking-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.title}
                  </h3>

                  <span className="block h-[2px] bg-[#097CF4] mt-3 mb-4 w-8 group-hover:w-16 transition-all duration-500"></span>

                  <p className={`text-[13px] leading-[1.65] ${isDark ? 'text-white/60 group-hover:text-white/85' : 'text-black/65 group-hover:text-white/70'} transition-colors`}>
                    {s.short}
                  </p>

                  <div className={`mt-5 pt-4 border-t flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] ${isDark ? 'border-white/15 group-hover:border-white/30' : 'border-black/10 group-hover:border-white/20'} transition-colors`} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <span>{s.metric.k} · {s.metric.v}</span>
                    <span className={`${isDark ? 'text-[#097CF4] group-hover:text-white' : ''} transition-colors`}>
                      View →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )
    })}

    {/* ─── STATS CALLOUT ──────────────────────────────── */}
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-t border-black/10">
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="relative border-2 border-black p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#097CF4]"></span>
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

          <div className="flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Not sure which service fits?
            </p>
            <h4
              className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-black leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tell us the problem. We'll tell you the <span className="italic text-[#097CF4]">service.</span>
            </h4>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Book a Free Discovery Call
            <span className="w-10 h-10 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white group-hover:text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>

    {/* ─── CTA ───────────────────────────────────────── */}
    <StartProject />
  </div>
)

export default Services
