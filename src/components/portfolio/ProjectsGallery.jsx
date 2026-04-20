import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const allProjects = [
  { id: 1, year: '2025', tag: 'web', category: 'Web Platform', title: 'Nexora Analytics', desc: 'Enterprise SaaS dashboard for 40K+ users.', accent: 'blue', span: 'lg:col-span-2', stack: 'Next.js · AWS' },
  { id: 2, year: '2025', tag: 'mobile', category: 'Mobile App', title: 'Finlytic Banking', desc: 'Award-winning neo-banking iOS + Android.', accent: 'black', stack: 'Swift · Kotlin' },
  { id: 3, year: '2024', tag: 'cloud', category: 'Cloud & DevOps', title: 'Orbital Logistics', desc: '7-region Kubernetes migration, zero downtime.', accent: 'blue', stack: 'K8s · Terraform' },
  { id: 4, year: '2024', tag: 'ai', category: 'AI / ML', title: 'Sentio Intelligence', desc: 'LLM copilot trained on proprietary docs.', accent: 'black', stack: 'LangChain · Pinecone' },
  { id: 5, year: '2024', tag: 'web', category: 'E-Commerce', title: 'Linea Commerce', desc: 'Headless storefront with 3× conversion lift.', accent: 'blue', stack: 'Next.js · Shopify' },
  { id: 6, year: '2023', tag: 'security', category: 'Cybersecurity', title: 'Aegis Healthcare', desc: 'SOC 2 + ISO 27001 certified in a single quarter.', accent: 'black', span: 'lg:col-span-2', stack: 'SOC 2 · ISO 27001' },
  { id: 7, year: '2023', tag: 'web', category: 'SaaS Platform', title: 'Plexa HR', desc: 'Modern HRIS for 200K+ employees.', accent: 'blue', stack: 'React · Postgres' },
  { id: 8, year: '2023', tag: 'mobile', category: 'Mobile App', title: 'Quantum Fitness', desc: 'Wellness app with 1.2M active installs.', accent: 'black', stack: 'Flutter · Firebase' },
  { id: 9, year: '2022', tag: 'ai', category: 'AI / ML', title: 'Lumen Vision', desc: 'Computer vision for retail shelf analytics.', accent: 'blue', stack: 'PyTorch · TensorFlow' },
  { id: 10, year: '2022', tag: 'cloud', category: 'Cloud & DevOps', title: 'Strata Media', desc: 'Petabyte-scale media pipeline on GCP.', accent: 'black', stack: 'GCP · BigQuery' },
]

const filters = [
  { label: 'All Work', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'Security', value: 'security' },
]

const years = ['All Years', '2025', '2024', '2023', '2022']

// Simple preview based on accent + category
const Visual = ({ project }) => {
  const isBlue = project.accent === 'blue'
  return (
    <div className={`relative w-full h-full ${isBlue ? 'bg-[#0276E2]' : 'bg-black'} overflow-hidden`}>
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
      <span className={`absolute top-6 right-6 w-8 h-8 ${isBlue ? 'bg-black' : 'bg-[#0276E2]'}`}></span>
      <span className={`absolute bottom-6 left-6 w-4 h-4 border-2 ${isBlue ? 'border-black' : 'border-[#0276E2]'}`}></span>
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
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                The Archive
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ten years of{' '}
              <span className="text-[#0276E2] italic">shipped</span> craft.
            </h2>
          </div>

          <p
            className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Filter by practice, vertical, or vintage. Click any card to read how it was built and how it lives today.
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
              Year →
            </span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-3 sm:px-4 h-8 text-[10px] font-bold uppercase tracking-[0.2em] border transition-colors ${
                  year === y
                    ? 'bg-[#0276E2] text-white border-[#0276E2]'
                    : 'bg-white text-black border-black/15 hover:border-[#0276E2] hover:text-[#0276E2]'
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
                <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2] z-10"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2] z-10"></span>

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
                    className="text-[22px] lg:text-[26px] font-extrabold text-black leading-tight tracking-tight group-hover:text-[#0276E2] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-black/60">{p.desc}</p>

                  <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-black/50" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <span>{p.stack}</span>
                    <span className="flex items-center gap-1 text-black group-hover:text-[#0276E2] transition-colors">
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

        {/* Load more strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t-2 border-black">
          <p
            className="text-[13px] text-black/60"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Viewing 10 of 250+ shipped projects.{' '}
            <Link to="/contact" className="text-[#0276E2] font-bold underline">
              Request access to the private archive →
            </Link>
          </p>

          <button
            className="group inline-flex items-center gap-3 h-12 px-6 bg-black text-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#0276E2] transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Load More Projects
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGallery
