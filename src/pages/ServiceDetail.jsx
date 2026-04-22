import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import {
  getService,
  getCategory,
  getServicesByCategory,
  getRelatedServices,
} from '../data/services'
import Seo, { buildServiceJsonLd, buildBreadcrumbJsonLd, SITE } from '../components/Seo'
import StartProject from '../components/StartProject'

// Build per-service SEO title and description from existing data.
const buildServiceSeo = (service, category) => {
  const categoryLabel = category?.label ? ` | ${category.label}` : ''
  const title = `${service.title} in Ahmedabad${categoryLabel} — ${service.tagline}`
  const description = `${service.intro.slice(0, 150).trim().replace(/[.,;]$/, '')}. Delivered by Tech Career IT Solutions, a founder-led web & digital marketing studio in Ahmedabad, India.`
  return { title, description }
}

// FAQ JSON-LD so Google can build "People also ask" snippets.
const buildFaqJsonLd = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
})

const defaultProcess = [
  { no: '01', phase: 'Discovery', duration: 'Week 1', title: 'Understand the brief.' },
  { no: '02', phase: 'Design', duration: 'Week 2 – 3', title: 'Blueprint the build.' },
  { no: '03', phase: 'Build', duration: 'Week 4 – 8', title: 'Ship, sprint by sprint.' },
  { no: '04', phase: 'Launch', duration: 'Week 9', title: 'Go live, confidently.' },
  { no: '05', phase: 'Support', duration: 'Ongoing', title: 'Evolve, don\u2019t erode.' },
]

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = useMemo(() => getService(slug), [slug])
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setOpenFaq(0)
  }, [slug])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const category = getCategory(service.category)
  const sibling = getServicesByCategory(service.category).filter((s) => s.slug !== slug)
  const related = getRelatedServices(slug, 3)
  const seo = buildServiceSeo(service, category)
  const serviceJsonLd = {
    ...buildServiceJsonLd(service),
    breadcrumb: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
  }
  const faqJsonLd = buildFaqJsonLd(service.faqs || [])

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`${SITE.baseUrl}/services/${service.slug}`}
        ogType="article"
        jsonLd={serviceJsonLd}
      />
      {/* Second LD block — FAQ schema for rich snippets */}
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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

        <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#097CF4]"></span>
        <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#097CF4]"></span>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <nav
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-black/50 mb-10"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <Link to="/" className="hover:text-[#097CF4]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#097CF4]">Services</Link>
            <span>/</span>
            <span className="text-[#097CF4] font-semibold truncate">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-10 h-px bg-[#097CF4]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  {category?.label} · Service
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-[88px] xl:text-[96px] font-extrabold text-black leading-[0.98] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {service.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-[#097CF4] italic">{service.title.split(' ').slice(-1).join('')}</span>
              </h1>

              <p
                className="mt-6 text-2xl lg:text-[28px] text-black/80 font-medium leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {service.tagline}
              </p>

              <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.75] text-black/70 max-w-[680px]">
                {service.intro}
              </p>

              <div
                className="mt-8 flex flex-wrap items-center gap-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors"
                >
                  See Pricing
                  <span className="w-10 h-10 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white group-hover:text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </a>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 h-14 px-6 border-2 border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
                >
                  Request a Quote
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hero metric card */}
            <div className="lg:col-span-4">
              <div className="relative bg-[#097CF4] text-white p-6 lg:p-8 shadow-[10px_10px_0_0_#000]">
                <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></span>

                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — Signature Result
                </p>

                <p
                  className="text-[64px] lg:text-[84px] font-extrabold leading-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {service.metric.k}
                  <span className="text-black">.</span>
                </p>

                <p
                  className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/85"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {service.metric.v}
                </p>

                {service.caseStudy && (
                  <div className="mt-6 pt-5 border-t border-white/30">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Featured Case
                    </p>
                    <p className="text-[14px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {service.caseStudy.title}
                    </p>
                    <p className="text-[11px] text-white/70 mt-0.5">{service.caseStudy.metric}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ──────────────────────────────────── */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
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
                  What You Get
                </span>
              </div>

              <h2
                className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Four <span className="text-[#097CF4] italic">capabilities</span>, one service.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10">
            {service.features.map((f, i) => (
              <article
                key={f.title}
                className="group relative p-6 lg:p-7 border-r border-b border-black/10 bg-white hover:bg-black hover:text-white transition-colors duration-500"
              >
                <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-black/20 group-hover:border-[#097CF4] transition-colors"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-black/20 group-hover:border-[#097CF4] transition-colors"></span>

                <span
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-[#097CF4] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — 0{i + 1}
                </span>

                <h3
                  className="mt-5 text-[22px] lg:text-[24px] font-extrabold leading-[1.15] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {f.title}
                </h3>

                <span className="block h-[2px] bg-[#097CF4] mt-3 mb-4 w-8 group-hover:w-16 transition-all duration-500"></span>

                <p className="text-[13px] leading-[1.65] text-black/65 group-hover:text-white/70 transition-colors">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Deliverables + Stack strip */}
          <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 border-2 border-black p-6 sm:p-8 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — What's in Every Engagement
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-[13px] font-semibold text-black">
                    <span className="w-6 h-6 bg-[#097CF4] text-white flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-black text-white p-6 sm:p-8 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Our Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] border border-white/30 text-white/80"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────── */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.2]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        ></div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[720px] mb-14 lg:mb-16">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                How We Deliver
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Five phases. <span className="text-[#097CF4] italic">No surprises.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {defaultProcess.map((p, i) => (
              <div
                key={p.no}
                className="relative border-2 border-black bg-white p-5 lg:p-6"
              >
                <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>
                <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#097CF4]"></span>

                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 font-extrabold text-[13px] ${
                      i < 2 ? 'bg-[#097CF4] text-white' : 'bg-black text-white'
                    }`}
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {p.no}
                  </span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/50"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {p.duration}
                  </span>
                </div>

                <p
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#097CF4] mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {p.phase}
                </p>
                <h3
                  className="text-[18px] font-extrabold text-black leading-tight tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ───────────────────────────────────── */}
      <section id="pricing" className="relative bg-black text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        ></div>

        <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#097CF4]"></span>
        <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#097CF4]"></span>
        <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#097CF4]"></span>
        <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#097CF4]"></span>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[720px] mb-12 lg:mb-16">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Pricing
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Transparent. <span className="text-[#097CF4] italic">Scoped.</span> Signed.
            </h2>

            <p className="mt-5 text-[15px] text-white/70 leading-relaxed max-w-[560px]">
              No surprise invoices. Every engagement begins with a written scope, a fixed quote or
              T&amp;M ceiling, and change-order rules that don't feel like a trap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.pricing.map((p) => {
              const featured = p.featured
              return (
                <article
                  key={p.tier}
                  className={`relative border-2 transition-transform ${
                    featured
                      ? 'bg-white text-black border-[#097CF4] lg:-translate-y-4 shadow-[10px_10px_0_0_#097CF4]'
                      : 'bg-black text-white border-white/30'
                  }`}
                >
                  {featured && (
                    <span
                      className="absolute -top-3 left-6 px-2.5 py-1 bg-[#097CF4] text-white text-[9px] font-bold uppercase tracking-[0.25em]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      Most Popular
                    </span>
                  )}

                  <div className="p-6 sm:p-8">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-3 ${
                        featured ? 'text-[#097CF4]' : 'text-[#097CF4]'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      — Tier
                    </p>
                    <h3
                      className={`text-2xl lg:text-[30px] font-extrabold leading-tight ${featured ? 'text-black' : 'text-white'}`}
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {p.tier}
                    </h3>

                    <div className="mt-6 pb-5 border-b-2 border-black/10 flex items-baseline gap-2">
                      <p
                        className={`text-4xl lg:text-[44px] font-extrabold leading-none ${featured ? 'text-black' : 'text-white'}`}
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {p.price}
                      </p>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-[0.25em] ${featured ? 'text-black/50' : 'text-white/50'}`}
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {p.duration}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {p.features.map((feat) => (
                        <li
                          key={feat}
                          className={`flex items-start gap-3 text-[13px] ${featured ? 'text-black/80' : 'text-white/80'}`}
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          <span
                            className={`w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 ${
                              featured ? 'bg-[#097CF4] text-white' : 'bg-white text-black'
                            }`}
                          >
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`group mt-6 w-full inline-flex items-center justify-between gap-3 h-12 px-4 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors ${
                        featured
                          ? 'bg-black text-white hover:bg-[#097CF4]'
                          : 'bg-[#097CF4] text-white hover:bg-white hover:text-[#097CF4]'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      Choose {p.tier}
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        ></div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-10 h-px bg-[#097CF4]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  FAQ
                </span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Common <span className="text-[#097CF4] italic">questions.</span>
              </h2>
              <p className="mt-5 text-[14px] text-black/65 leading-relaxed">
                The ones we hear most. Didn't find yours?{' '}
                <Link to="/contact" className="text-[#097CF4] font-bold underline">
                  Ask us directly →
                </Link>
              </p>
            </div>

            <div className="lg:col-span-8">
              <ul className="border-t-2 border-black">
                {service.faqs.map((f, i) => {
                  const isOpen = openFaq === i
                  return (
                    <li key={f.q} className="border-b-2 border-black">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                        className="w-full text-left flex items-start gap-4 py-5 sm:py-6 group"
                      >
                        <span
                          className={`shrink-0 text-[11px] font-bold uppercase tracking-[0.3em] pt-1.5 transition-colors ${
                            isOpen ? 'text-[#097CF4]' : 'text-black/40 group-hover:text-[#097CF4]'
                          }`}
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`flex-1 text-xl sm:text-2xl lg:text-[26px] font-extrabold leading-[1.25] tracking-tight transition-colors ${
                            isOpen ? 'text-[#097CF4]' : 'text-black group-hover:text-[#097CF4]'
                          }`}
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {f.q}
                        </span>
                        <span
                          className={`shrink-0 w-10 h-10 flex items-center justify-center border-2 transition-colors ${
                            isOpen
                              ? 'bg-[#097CF4] border-[#097CF4] text-white'
                              : 'border-black text-black group-hover:bg-black group-hover:text-white'
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-0 sm:pl-12 pb-8 pr-16">
                          <div className="border-l-2 border-[#097CF4] pl-5">
                            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-black/70">
                              {f.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED ───────────────────────────────────── */}
      <section className="relative bg-white py-20 lg:py-28 border-t border-black/10 overflow-hidden">
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-14">
            <div>
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-10 h-px bg-[#097CF4]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  Related Services
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Often <span className="text-[#097CF4] italic">paired</span> with this.
              </h2>
            </div>

            <Link
              to="/services"
              className="group self-start lg:self-end inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              All Services
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {related.map((r) => {
              const cat = getCategory(r.category)
              return (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="group relative border-2 border-black bg-white p-6 lg:p-7 hover:bg-black hover:text-white transition-colors duration-500"
                >
                  <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
                  <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    — {cat?.label}
                  </p>
                  <h3
                    className="text-[22px] lg:text-[26px] font-extrabold leading-tight tracking-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {r.title}
                  </h3>
                  <span className="block h-[2px] bg-[#097CF4] mt-3 mb-4 w-8 group-hover:w-16 transition-all duration-500"></span>
                  <p className="text-[13px] leading-[1.65] text-black/65 group-hover:text-white/70 transition-colors">
                    {r.short}
                  </p>

                  <div className="mt-5 pt-4 border-t border-black/10 group-hover:border-white/20 flex items-center justify-between transition-colors">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.25em]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      Learn More
                    </span>
                    <span className="w-9 h-9 bg-black text-white group-hover:bg-[#097CF4] flex items-center justify-center transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {sibling.length > 0 && (
            <div className="mt-14 pt-8 border-t-2 border-black">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — More in {category?.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {sibling.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="px-4 h-10 inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <StartProject />
    </div>
  )
}

export default ServiceDetail
