import React from 'react'
import { Link } from 'react-router-dom'

const reasons = [
  {
    no: '01',
    title: 'Senior Engineering, End to End',
    desc: 'No juniors throwing code over the wall. Every project is led by architects with 10+ years of shipping production systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7M5 11.5V17a2 2 0 001 1.7l5 2.8a2 2 0 002 0l5-2.8a2 2 0 001-1.7v-5.5" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Predictable Delivery',
    desc: 'Agile sprints with transparent roadmaps, burn-down charts and weekly demos — you always know what is shipping and when.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Security-First by Default',
    desc: 'ISO 27001 processes, SOC 2 practices, encrypted pipelines, and quarterly pentests — baked in, not bolted on.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    no: '04',
    title: 'Transparent Pricing',
    desc: 'Fixed-scope, T&M, or retainer — you pick the model. No surprise invoices, no hidden scope, no change-order theatre.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    no: '05',
    title: 'Scale Without Rewrites',
    desc: 'We design for the 10× scenario from day one — modular architecture, clean contracts, observability built in.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    no: '06',
    title: 'Long-Term Partnership',
    desc: '98% client retention. We stay after launch — monitoring, iterating, evolving — so your product keeps winning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87m10-4a4 4 0 10-8 0 4 4 0 008 0z" />
      </svg>
    ),
  },
]

const pillars = [
  { k: 'ISO 27001', v: 'Certified' },
  { k: '24 / 7', v: 'Support SLA' },
  { k: '2.3 wks', v: 'Avg. MVP Ship' },
  { k: '98%', v: 'Retention' },
]

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative bg-black text-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <span className="pointer-events-none absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#0276E2]"></span>
      <span className="pointer-events-none absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#0276E2]"></span>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT — sticky intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Why Choose Us
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Six reasons teams keep{' '}
              <span className="text-[#0276E2] italic">coming back.</span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-white/70 max-w-[460px]">
              We are not the biggest IT firm — and that is the point. We are the partner you call
              when the work actually has to be right.
            </p>

            {/* Pillars strip */}
            <div className="mt-10 border-t border-white/15">
              <dl className="grid grid-cols-2">
                {pillars.map((p, i) => (
                  <div
                    key={p.k}
                    className={`py-5 ${i % 2 === 0 ? 'pr-4' : 'pl-4 border-l border-white/15'} ${
                      i < 2 ? 'border-b border-white/15' : ''
                    }`}
                  >
                    <dt
                      className="text-2xl lg:text-3xl font-extrabold leading-none"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {p.k}
                      <span className="text-[#0276E2]">.</span>
                    </dt>
                    <dd
                      className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {p.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 h-12 px-6 border-2 border-white text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#0276E2] hover:border-[#0276E2] transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Learn About Us
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* RIGHT — reasons list */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/15">
              {reasons.map((r) => (
                <div
                  key={r.no}
                  className="group grid grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 border-b border-white/15 transition-colors hover:bg-white/[0.03]"
                >
                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-[#0276E2] transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {r.no}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="col-span-10 sm:col-span-2">
                    <div className="w-12 h-12 border-2 border-white/30 group-hover:border-[#0276E2] group-hover:bg-[#0276E2] flex items-center justify-center transition-colors">
                      <div className="w-6 h-6">{r.icon}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-12 sm:col-span-9 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-xl sm:text-[22px] lg:text-[26px] font-extrabold leading-[1.2] group-hover:text-[#0276E2] transition-colors"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {r.title}
                      </h3>
                      <p className="mt-2 text-[13px] lg:text-[14px] leading-[1.65] text-white/60">
                        {r.desc}
                      </p>
                    </div>
                    <span className="shrink-0 w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 group-hover:text-[#0276E2] group-hover:border-[#0276E2] transition-colors">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
