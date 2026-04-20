import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'nexora',
    no: '01',
    year: '2025',
    category: 'Web Platform',
    client: 'Nexora Analytics',
    title: 'Data at the speed of decision.',
    desc: 'A real-time SaaS analytics suite serving 40k+ concurrent users — with sub-second query response across 3 regions. Rebuilt from a legacy monolith into a modular, event-driven architecture.',
    stack: ['Next.js', 'PostgreSQL', 'Kafka', 'AWS'],
    metrics: [
      { k: '40K+', v: 'Active Users' },
      { k: '0.4s', v: 'Avg. Query' },
      { k: '3×', v: 'Engagement' },
    ],
    preview: 'dashboard',
  },
  {
    id: 'finlytic',
    no: '02',
    year: '2025',
    category: 'Mobile App',
    client: 'Finlytic Banking',
    title: 'Finance, redesigned for the thumb.',
    desc: 'An award-winning consumer neo-banking app featuring biometric auth, AI-powered spending insights, and instant UPI transfers. Rated 4.9★ in the App Store within six weeks of launch.',
    stack: ['Swift', 'Kotlin', 'Node.js', 'Plaid'],
    metrics: [
      { k: '4.9★', v: 'App Rating' },
      { k: '210K', v: 'Installs / mo' },
      { k: '6 wks', v: 'Time to Launch' },
    ],
    preview: 'phone',
  },
  {
    id: 'orbital',
    no: '03',
    year: '2024',
    category: 'Cloud & DevOps',
    client: 'Orbital Logistics',
    title: 'Infra that never sleeps.',
    desc: 'Zero-downtime Kubernetes migration across seven regions for a global logistics leader. Automated provisioning, observability, and blue-green deploys cut release cycles from days to minutes.',
    stack: ['Kubernetes', 'Terraform', 'GCP', 'Grafana'],
    metrics: [
      { k: '7', v: 'Regions' },
      { k: '99.99%', v: 'Uptime' },
      { k: '82%', v: 'Faster Deploys' },
    ],
    preview: 'cloud',
  },
  {
    id: 'sentio',
    no: '04',
    year: '2024',
    category: 'AI / ML',
    client: 'Sentio Intelligence',
    title: 'A copilot that actually knows.',
    desc: 'A retrieval-augmented LLM assistant trained on proprietary internal documents, adopted by 12 teams to automate research, reporting, and compliance answers with auditable citations.',
    stack: ['Python', 'LangChain', 'Pinecone', 'OpenAI'],
    metrics: [
      { k: '12', v: 'Teams Active' },
      { k: '63%', v: 'Time Saved' },
      { k: '2M+', v: 'Docs Indexed' },
    ],
    preview: 'ai',
  },
  {
    id: 'aegis',
    no: '05',
    year: '2023',
    category: 'Cybersecurity',
    client: 'Aegis Healthcare',
    title: 'Compliance without compromise.',
    desc: 'End-to-end security hardening and audit readiness for a healthcare unicorn — delivered SOC 2 Type II and ISO 27001 certification in a single quarter without slowing product velocity.',
    stack: ['SOC 2', 'ISO 27001', 'SIEM', 'Pentest'],
    metrics: [
      { k: '100%', v: 'Audit Pass' },
      { k: '1 Qtr', v: 'To Certified' },
      { k: '0', v: 'Critical Findings' },
    ],
    preview: 'shield',
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

  if (type === 'cloud') {
    return (
      <div className={`${base} flex items-center justify-center`}>
        <svg viewBox="0 0 160 160" className="w-3/4 h-3/4 text-white">
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4, 5].map((c) => {
              const cx = 15 + c * 26
              const cy = 40 + r * 26
              const isCore = r === 1 && c === 2
              return (
                <g key={`${r}-${c}`}>
                  {!isCore && (
                    <line x1={80} y1={66} x2={cx} y2={cy} stroke="white" strokeWidth="0.4" opacity="0.4" />
                  )}
                  <circle cx={cx} cy={cy} r={isCore ? 6 : 2} fill={isCore ? 'white' : 'rgba(255,255,255,0.55)'} />
                  {isCore && <circle cx={cx} cy={cy} r="10" fill="none" stroke="white" strokeWidth="0.8" />}
                </g>
              )
            })
          )}
        </svg>
      </div>
    )
  }

  if (type === 'ai') {
    return (
      <div className={`${base} flex items-center justify-center p-8`}>
        <div className="w-full max-w-[320px] space-y-3">
          <div className="bg-white border-2 border-black p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 bg-black"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">User</span>
            </div>
            <div className="h-1.5 bg-black/60 w-4/5"></div>
            <div className="h-1.5 bg-black/40 w-3/5 mt-1.5"></div>
          </div>
          <div className="bg-black text-white p-3 ml-8 border-2 border-[#0276E2]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 bg-[#0276E2] flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Sentio</span>
            </div>
            <div className="h-1.5 bg-white/80 w-full"></div>
            <div className="h-1.5 bg-white/60 w-5/6 mt-1.5"></div>
            <div className="h-1.5 bg-white/40 w-2/3 mt-1.5"></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'shield') {
    return (
      <div className={`${base} flex items-center justify-center`}>
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className="w-40 h-40 lg:w-48 lg:h-48 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          </svg>
          <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#0276E2] border-2 border-white flex items-center justify-center">
            <span className="text-white text-[10px] font-extrabold">SOC</span>
          </span>
          <span className="absolute -bottom-3 -left-3 w-8 h-8 bg-black border-2 border-white flex items-center justify-center">
            <span className="text-white text-[10px] font-extrabold">ISO</span>
          </span>
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
      id="portfolio"
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
                Our Work
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Work that we are{' '}
              <span className="text-[#0276E2] italic">proud</span> to sign.
            </h2>

            <p
              className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70 max-w-[560px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A curated showcase of recent collaborations — each one shipped, stress-tested, and
              still running in production.
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
              aria-label="Previous project"
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
              aria-label="Next project"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: project index */}
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
                      {/* Index bar */}
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

                      {/* Row content */}
                      <div className="flex-1 p-4 sm:p-5 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p
                            className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] ${
                              isActive ? 'text-[#0276E2]' : 'text-black/50'
                            }`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {p.category} · {p.year}
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

          {/* Right: featured project */}
          <div className="lg:col-span-8">
            <article
              key={project.id}
              className="relative border-2 border-black bg-white animate-[fadeUp_0.4s_ease_both]"
            >
              {/* Preview */}
              <div className="relative aspect-[16/9] border-b-2 border-black">
                <Preview type={project.preview} />

                {/* Meta overlays */}
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
                    {project.year}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span
                    className="px-3 py-1.5 bg-[#0276E2] text-white text-[10px] font-bold uppercase tracking-[0.25em]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Case Study {project.no}
                  </span>
                </div>

                {/* Corner markers */}
                <span className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white z-10"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white z-10"></span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-3"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  — Client · {project.client}
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

                {/* Metrics */}
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

                {/* Stack + CTA */}
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
                    to="/portfolio"
                    className="group inline-flex items-center gap-3 h-12 pl-5 pr-2 bg-black text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#0276E2] transition-colors shrink-0"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Read Case Study
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
                  aria-label={`Project ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t-2 border-black">
          <div className="flex items-center gap-4">
            <span className="flex -space-x-2">
              {['N', 'F', 'O', 'S'].map((l, i) => (
                <span
                  key={l}
                  className={`w-10 h-10 border-2 border-white flex items-center justify-center text-[11px] font-extrabold ${
                    i % 2 === 0 ? 'bg-black text-white' : 'bg-[#0276E2] text-white'
                  }`}
                >
                  {l}
                </span>
              ))}
            </span>
            <div>
              <p
                className="text-[14px] font-extrabold text-black"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                80+ Happy Clients
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">Across 14 Countries</p>
            </div>
          </div>

          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Explore Full Portfolio
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
