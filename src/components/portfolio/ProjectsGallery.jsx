import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const allProjects = [
  { id: 1, year: '2–3 wk', tag: 'web', category: 'Business Website', title: 'Brand Website', desc: '5–10 page responsive site with CMS, forms and analytics.', accent: 'blue', span: 'lg:col-span-2', stack: 'Next.js · WordPress' },
  { id: 2, year: '2–4 wk', tag: 'ecom', category: 'E-commerce', title: 'Shopify Store', desc: 'Catalogue, payments, shipping and checkout — ready to sell.', accent: 'black', stack: 'Shopify · Razorpay' },
  { id: 3, year: '4–8 wk', tag: 'mobile', category: 'Mobile App', title: 'iOS + Android App', desc: 'Cross-platform app with push, auth and payments.', accent: 'blue', stack: 'React Native · Flutter' },
  { id: 4, year: '4–6 wk', tag: 'crm', category: 'Custom CRM', title: 'Sales CRM', desc: 'Leads, pipelines, reports and team roles — tailored to your flow.', accent: 'black', stack: 'React · Node.js' },
  { id: 5, year: '3–6 wk', tag: 'ecom', category: 'E-commerce', title: 'Custom Storefront', desc: 'WooCommerce or headless store with Razorpay / Stripe.', accent: 'blue', stack: 'WooCommerce · Next.js' },
  { id: 6, year: '4–8 wk', tag: 'crm', category: 'HRMS', title: 'HR Management System', desc: 'Attendance, payroll, leave and onboarding in one portal.', accent: 'black', span: 'lg:col-span-2', stack: 'React · PostgreSQL' },
  { id: 7, year: '3–5 wk', tag: 'web', category: 'SaaS Landing', title: 'SaaS Marketing Site', desc: 'High-converting landing pages with SEO and analytics built in.', accent: 'blue', stack: 'Next.js · Tailwind' },
  { id: 8, year: 'Monthly', tag: 'marketing', category: 'Digital Marketing', title: 'SEO + Google Ads', desc: 'Technical SEO, Google Ads and monthly reporting retainer.', accent: 'black', stack: 'SEO · Google Ads' },
  { id: 9, year: 'Monthly', tag: 'marketing', category: 'Social Media', title: 'Meta Ads + Social', desc: 'Instagram, Facebook ads and organic content for brand growth.', accent: 'blue', stack: 'Meta Ads · Content' },
  { id: 10, year: '2–3 wk', tag: 'web', category: 'Design', title: 'UI / UX Design', desc: 'Figma wireframes, prototypes and handover-ready design system.', accent: 'black', stack: 'Figma · Prototyping' },
]

const filters = [
  { label: 'All Capabilities', value: 'all' },
  { label: 'Websites', value: 'web' },
  { label: 'E-commerce', value: 'ecom' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'CRM / HRMS', value: 'crm' },
  { label: 'Marketing', value: 'marketing' },
]

const years = ['All Timelines', '2–3 wk', '2–4 wk', '3–5 wk', '4–8 wk', 'Monthly']

// Simple preview based on accent + category
const Visual = ({ project }) => {
  const isBlue = project.accent === 'blue'
  return (
    <div className={`relative w-full h-full ${isBlue ? 'bg-[#097CF4]' : 'bg-black'} overflow-hidden`}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-[80px] sm:text-[100px] lg:text-[140px] font-black text-white/80 leading-none tracking-tighter"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {project.title.split(' ')[0].charAt(0)}
          <span className="text-black">{project.title.split(' ')[1]?.charAt(0) || ''}</span>
        </span>
      </div>
      {/* Floating elements */}
      <span className={`absolute top-6 right-6 w-8 h-8 ${isBlue ? 'bg-black' : 'bg-[#097CF4]'}`}></span>
      <span className={`absolute bottom-6 left-6 w-4 h-4 border-2 ${isBlue ? 'border-black' : 'border-[#097CF4]'}`}></span>
    </div>
  )
}

const ProjectsGallery = () => {
  const [active, setActive] = useState('all')
  const [year, setYear] = useState('All Years')

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchCat = active === 'all' || p.tag === active
      const matchYear = year === 'All Years' || p.year === year
      return matchCat && matchYear
    })
  }, [active, year])

  return (
    <section
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-12">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                The Capability Grid
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Every build we ship, with{' '}
              <span className="text-[#097CF4] italic">honest</span> timelines.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Filter by capability or timeline. Every card below is a real format we can build for you — click to request a quote.
          </p>
        </div>

        {/* Filters */}
        <div
          className="mb-10 lg:mb-14 pb-6 border-b-2 border-black space-y-4"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 mr-2 hidden sm:inline">
              Practice →
            </span>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 sm:px-5 h-10 text-[11px] font-bold uppercase tracking-[0.2em] border-2 transition-colors ${
                  active === f.value
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black/15 hover:border-black'
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto text-[11px] font-semibold uppercase tracking-[0.25em] text-black/50">
              Showing <span className="text-black">{filtered.length}</span> / {allProjects.length}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 mr-2 hidden sm:inline">
              Timeline →
            </span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-3 sm:px-4 h-8 text-[10px] font-bold uppercase tracking-[0.2em] border transition-colors ${
                  year === y
                    ? 'bg-[#097CF4] text-white border-[#097CF4]'
                    : 'bg-white text-black border-black/15 hover:border-[#097CF4] hover:text-[#097CF4]'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((p) => (
              <Link
                to="/portfolio"
                key={p.id}
                className={`group relative border-2 border-black bg-white transition-all duration-500 hover:-translate-y-1 ${p.span || ''}`}
              >
                <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4] z-10"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4] z-10"></span>

                <div className={`relative ${p.span ? 'aspect-[16/9]' : 'aspect-[4/3]'} border-b-2 border-black`}>
                  <Visual project={p} />

                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span
                      className="px-2.5 py-1 bg-white border-2 border-black text-[10px] font-bold uppercase tracking-[0.2em] text-black"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {p.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="px-2.5 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {p.year}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="w-16 h-16 bg-white text-black border-2 border-black flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-7">
                  <h3
                    className="text-[22px] lg:text-[26px] font-extrabold text-black leading-tight tracking-tight group-hover:text-[#097CF4] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-black/60">{p.desc}</p>

                  <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-black/50" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <span>{p.stack}</span>
                    <span className="flex items-center gap-1 text-black group-hover:text-[#097CF4] transition-colors">
                      View
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-black/20 py-20 text-center">
            <p
              className="text-[14px] text-black/50"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              No projects in this filter. Try adjusting the filters above.
            </p>
          </div>
        )}

        {/* Bottom strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t-2 border-black">
          <p
            className="text-[13px] text-black/60"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Don't see your exact need?{' '}
            <Link to="/contact" className="text-[#097CF4] font-bold underline">
              Tell us about your project — we'll scope it for free →
            </Link>
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 h-12 px-6 bg-black text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#097CF4] transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Request a Custom Quote
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGallery
