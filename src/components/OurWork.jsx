import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'dashboard',
    no: '01',
    category: 'Web App',
    client: 'Admin Dashboards',
    title: 'Turn your data into decisions.',
    desc: 'Custom admin panels and analytics dashboards — from internal tools replacing spreadsheets to full SaaS control rooms. Role-based access, clean charts, and exports your team actually uses.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Tailwind'],
    metrics: [
      { k: '3–6', v: 'Week Build' },
      { k: 'Role', v: 'Based Access' },
      { k: 'CSV', v: 'Exports Built-in' },
    ],
    preview: 'dashboard',
  },
  {
    id: 'mobile',
    no: '02',
    category: 'Mobile App',
    client: 'Mobile Applications',
    title: 'One codebase. Both stores.',
    desc: 'iOS and Android apps built once in React Native or Flutter — with push notifications, payments, biometric auth and a backend that scales as you grow.',
    stack: ['React Native', 'Flutter', 'Node.js', 'Firebase'],
    metrics: [
      { k: 'iOS +', v: 'Android' },
      { k: 'Push', v: 'Notifications' },
      { k: 'UPI /', v: 'Payments' },
    ],
    preview: 'phone',
  },
  {
    id: 'ecommerce',
    no: '03',
    category: 'E-commerce',
    client: 'Online Stores',
    title: 'Sell everywhere, manage in one place.',
    desc: 'Shopify builds or custom e-commerce with catalogue management, Razorpay / Stripe checkout, inventory, shipping zones and order tracking — ready to launch and optimised for conversions.',
    stack: ['Shopify', 'WooCommerce', 'Razorpay', 'Stripe'],
    metrics: [
      { k: '2–4', v: 'Week Launch' },
      { k: 'UPI', v: 'Razorpay Stripe' },
      { k: 'SEO', v: 'Ready' },
    ],
    preview: 'ecom',
  },
  {
    id: 'crm',
    no: '04',
    category: 'Custom Software',
    client: 'CRM & HRMS',
    title: 'Software that fits your workflow.',
    desc: 'Custom CRM, HRMS, billing tools and internal portals — tailored to exactly how your team works. No bloated off-the-shelf tool trying to bend around you.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    metrics: [
      { k: 'Custom', v: 'Workflows' },
      { k: 'Cloud', v: 'Hosted' },
      { k: '∞', v: 'Team Seats' },
    ],
    preview: 'crm',
  },
  {
    id: 'marketing',
    no: '05',
    category: 'Digital Marketing',
    client: 'Marketing & Growth',
    title: 'Bring traffic the website deserves.',
    desc: 'SEO, Google Ads, Meta Ads and organic social handled by a team that understands your tech stack — measurable campaigns with clear monthly reporting, not vanity metrics.',
    stack: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
    metrics: [
      { k: 'SEO', v: 'Audit + Fix' },
      { k: 'Ads', v: 'Managed' },
      { k: 'Monthly', v: 'Reporting' },
    ],
    preview: 'marketing',
  },
]

const Preview = ({ type }) => {
  const base = 'relative w-full h-full overflow-hidden bg-[#0276E2]'

  if (type === 'dashboard') {
    return (
      <div className={base}>
        <div className="absolute inset-6 lg:inset-10 bg-white border-2 border-black">
          <div className="flex items-center gap-1 px-4 py-3 border-b-2 border-black">
            <span className="w-2.5 h-2.5 rounded-full bg-black/30"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-black/30"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0276E2]"></span>
          </div>
          <div className="p-4 lg:p-5 grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-2.5">
              <div className="h-2.5 w-1/3 bg-black"></div>
              <div className="h-24 lg:h-28 border border-black/15 flex items-end gap-1 p-2">
                {[40, 70, 55, 80, 35, 90, 60, 72].map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 ${i === 3 ? 'bg-[#0276E2]' : 'bg-black/70'}`}
                    style={{ height: `${h}%` }}
                  ></span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 border border-black/15 flex items-center justify-center">
                  <span className="h-1.5 w-2/3 bg-black"></span>
                </div>
                <div className="h-10 border border-black/15 flex items-center justify-center">
                  <span className="h-1.5 w-2/3 bg-[#0276E2]"></span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-7 bg-black"></div>
              <div className="h-2 bg-black/70"></div>
              <div className="h-2 bg-black/40 w-4/5"></div>
              <div className="h-2 bg-black/40 w-3/5"></div>
              <div className="h-2 bg-black/40 w-2/3"></div>
              <div className="h-7 bg-[#0276E2] mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'phone') {
    return (
      <div className={base}>
        <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-[50%] min-w-[180px] max-w-[240px] bg-black border-2 border-black rounded-[20px] p-1.5">
          <div className="relative w-full h-full bg-white rounded-[14px] overflow-hidden">
            <div className="h-1.5 w-1/3 bg-black mt-2.5 mx-auto rounded-full"></div>
            <div className="px-4 pt-4 space-y-3">
              <div className="h-2.5 bg-black w-2/3"></div>
              <div className="h-14 bg-[#0276E2] flex flex-col items-center justify-center">
                <span className="text-[9px] text-white/70 uppercase tracking-widest">Balance</span>
                <span className="text-white text-[14px] font-extrabold">₹ 4,82,310</span>
              </div>
              <div className="space-y-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`w-4 h-4 ${i % 2 ? 'bg-[#0276E2]' : 'bg-black'}`}></span>
                    <span className="flex-1 h-1.5 bg-black/30"></span>
                    <span className="h-1.5 w-8 bg-black/60"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'ecom') {
    return (
      <div className={`${base} p-6 lg:p-8`}>
        <div className="relative w-full h-full bg-white border-2 border-black overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b-2 border-black">
            <span className="h-2 w-16 bg-black"></span>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-10 bg-black/50"></span>
              <span className="w-5 h-5 bg-[#0276E2]"></span>
            </div>
          </div>
          <div className="p-4 grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border border-black/15 p-2">
                <div className={`h-10 ${i % 2 ? 'bg-[#0276E2]/20' : 'bg-black/10'}`}></div>
                <div className="mt-2 h-1.5 bg-black/60 w-3/4"></div>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="h-1.5 w-6 bg-black"></span>
                  <span className="h-4 w-6 bg-[#0276E2]"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'crm') {
    return (
      <div className={`${base} p-6 lg:p-8`}>
        <div className="relative w-full h-full bg-white border-2 border-black overflow-hidden grid grid-cols-4">
          <div className="col-span-1 bg-black p-3 space-y-2">
            <span className="block h-1.5 w-4/5 bg-white/60"></span>
            <span className="block h-1.5 w-3/5 bg-white/40"></span>
            <span className="block h-1.5 w-4/5 bg-[#0276E2]"></span>
            <span className="block h-1.5 w-2/3 bg-white/30"></span>
            <span className="block h-1.5 w-3/4 bg-white/30"></span>
          </div>
          <div className="col-span-3 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="h-2 w-24 bg-black"></span>
              <span className="h-6 w-16 bg-[#0276E2]"></span>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 border border-black/10 p-2">
                <span className={`w-6 h-6 ${i % 2 ? 'bg-[#0276E2]' : 'bg-black'}`}></span>
                <div className="flex-1">
                  <span className="block h-1.5 w-2/3 bg-black/70"></span>
                  <span className="block h-1 w-1/3 bg-black/30 mt-1"></span>
                </div>
                <span className="h-1.5 w-10 bg-black/40"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'marketing') {
    return (
      <div className={`${base} flex items-center justify-center p-8`}>
        <div className="w-full max-w-[360px] space-y-3">
          <div className="bg-white border-2 border-black p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">SEO Ranking</span>
              <span className="text-[10px] font-bold text-[#0276E2]">↑ 32%</span>
            </div>
            <div className="h-12 border border-black/15 flex items-end gap-1 p-1">
              {[20, 28, 36, 30, 48, 55, 70, 85].map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 ${i === 7 ? 'bg-[#0276E2]' : 'bg-black/60'}`}
                  style={{ height: `${h}%` }}
                ></span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black text-white p-3 border-2 border-[#0276E2]">
              <span className="block text-[9px] uppercase tracking-widest text-white/60">Ad Spend</span>
              <span className="block text-[15px] font-extrabold mt-1">₹ 48k</span>
              <span className="block text-[9px] text-[#0276E2] mt-1">3.2× ROAS</span>
            </div>
            <div className="bg-white border-2 border-black p-3">
              <span className="block text-[9px] uppercase tracking-widest text-black/60">Clicks</span>
              <span className="block text-[15px] font-extrabold mt-1 text-black">12,480</span>
              <span className="block text-[9px] text-[#0276E2] mt-1">CTR 4.1%</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div className={base}></div>
}

const OurWork = () => {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section
      id="capabilities"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                What We Build
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A studio ready to ship{' '}
              <span className="text-[#0276E2] italic">your</span> first product.
            </h2>

            <p
              className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[560px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We're a new LLP — so instead of old case studies, here is exactly what we can build
              for you, the stack we use, and a realistic timeline.
            </p>
          </div>

          {/* Navigation controls */}
          <div
            className="flex items-center gap-3"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <button
              onClick={() => setActive((i) => (i - 1 + projects.length) % projects.length)}
              className="w-12 h-12 border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              aria-label="Previous capability"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/60 px-2">
              <span className="text-black">{String(active + 1).padStart(2, '0')}</span>
              <span className="mx-1 text-black/30">/</span>
              {String(projects.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setActive((i) => (i + 1) % projects.length)}
              className="w-12 h-12 border-2 border-black bg-black text-white flex items-center justify-center hover:bg-[#0276E2] hover:border-[#0276E2] transition-colors"
              aria-label="Next capability"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: capability index */}
          <div className="lg:col-span-4">
            <div className="border-t-2 border-black">
              {projects.map((p, i) => {
                const isActive = active === i
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(i)}
                    className={`group w-full text-left border-b-2 border-black transition-colors ${
                      isActive ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/[0.03]'
                    }`}
                  >
                    <div className="flex items-stretch">
                      <div
                        className={`shrink-0 w-14 sm:w-16 flex items-center justify-center border-r-2 transition-colors ${
                          isActive ? 'bg-[#0276E2] border-[#0276E2] text-white' : 'border-black text-black/50'
                        }`}
                      >
                        <span
                          className="text-[13px] font-extrabold tracking-[0.2em]"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {p.no}
                        </span>
                      </div>

                      <div className="flex-1 p-4 sm:p-5 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p
                            className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] ${
                              isActive ? 'text-[#0276E2]' : 'text-black/50'
                            }`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {p.category}
                          </p>
                          <p
                            className={`mt-1 text-[16px] sm:text-[18px] font-extrabold truncate`}
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {p.client}
                          </p>
                        </div>
                        <svg
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? 'text-[#0276E2] translate-x-0' : 'text-black/30 -translate-x-1 group-hover:translate-x-0'
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: featured capability */}
          <div className="lg:col-span-8">
            <article
              key={project.id}
              className="relative border-2 border-black bg-white animate-[fadeUp_0.4s_ease_both]"
            >
              <div className="relative aspect-[16/9] border-b-2 border-black">
                <Preview type={project.preview} />

                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span
                    className="px-3 py-1.5 bg-white border-2 border-black text-[10px] font-bold uppercase tracking-[0.25em] text-black"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="px-3 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.25em]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Demo
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="px-3 py-1.5 bg-[#0276E2] text-white text-[10px] font-bold uppercase tracking-[0.25em]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Capability {project.no}
                  </span>
                </div>

                <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white z-10"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white z-10"></span>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — Capability · {project.client}
                </p>

                <h3
                  className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-black leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {project.title}
                </h3>

                <p className="mt-5 text-[14px] sm:text-[15px] leading-[1.75] text-black/70 max-w-[680px]">
                  {project.desc}
                </p>

                <div className="mt-8 grid grid-cols-3 border-t-2 border-black">
                  {project.metrics.map((m, i) => (
                    <div
                      key={m.v}
                      className={`py-5 ${i !== project.metrics.length - 1 ? 'border-r-2 border-black' : ''}`}
                    >
                      <p
                        className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-black leading-none"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {m.k}
                        <span className="text-[#0276E2]">.</span>
                      </p>
                      <p
                        className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-black/60"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {m.v}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-6 border-t border-black/10">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/15 text-black/70"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 h-12 pl-5 pr-2 bg-black text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#0276E2] transition-colors shrink-0"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Get a Quote
                    <span className="w-9 h-9 bg-[#0276E2] group-hover:bg-white flex items-center justify-center transition-colors">
                      <svg
                        className="w-3.5 h-3.5 text-white group-hover:text-[#0276E2]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Progress bar */}
            <div className="mt-5 flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 flex-1 transition-colors ${
                    i === active ? 'bg-[#0276E2]' : i < active ? 'bg-black' : 'bg-black/15'
                  }`}
                  aria-label={`Capability ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip — honest CTA */}
        <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t-2 border-black">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 bg-[#0276E2] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <div>
              <p
                className="text-[14px] font-extrabold text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Your project could be our first feature.
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
                Launch-client pricing · limited slots
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Book a Free Call
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default OurWork
