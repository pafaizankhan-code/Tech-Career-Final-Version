import React, { useState, useMemo } from 'react'

const jobs = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    dept: 'Engineering',
    location: 'Ahmedabad',
    remote: true,
    type: 'Full-time',
    exp: '1–3 yrs',
    salary: 'Market fair',
    badges: ['Featured', 'Founding'],
  },
  {
    id: 2,
    title: 'UI / UX Designer',
    dept: 'Design',
    location: 'Ahmedabad',
    remote: true,
    type: 'Full-time',
    exp: '1–3 yrs',
    salary: 'Market fair',
    badges: ['Founding'],
  },
  {
    id: 3,
    title: 'Digital Marketing Lead',
    dept: 'Growth',
    location: 'Ahmedabad',
    remote: true,
    type: 'Full-time',
    exp: '2–4 yrs',
    salary: 'Market fair',
    badges: [],
  },
  {
    id: 4,
    title: 'Web Development Intern',
    dept: 'Engineering',
    location: 'Ahmedabad',
    remote: false,
    type: 'Internship',
    exp: 'Final year / new grad',
    salary: 'Paid stipend',
    badges: ['3–6 months'],
  },
  {
    id: 5,
    title: 'Content & SEO Intern',
    dept: 'Growth',
    location: 'Ahmedabad',
    remote: true,
    type: 'Internship',
    exp: 'Any',
    salary: 'Paid stipend',
    badges: ['3 months'],
  },
]

const departments = ['All Teams', 'Engineering', 'Design', 'Growth']
const locations = ['All Locations', 'Ahmedabad', 'Remote']
const types = ['All Types', 'Full-time', 'Internship']

const OpenPositions = () => {
  const [dept, setDept] = useState('All Teams')
  const [loc, setLoc] = useState('All Locations')
  const [type, setType] = useState('All Types')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchDept = dept === 'All Teams' || j.dept === dept
      const matchLoc = loc === 'All Locations' || j.location === loc
      const matchType = type === 'All Types' || j.type === type
      const q = query.trim().toLowerCase()
      const matchQuery = !q || j.title.toLowerCase().includes(q) || j.dept.toLowerCase().includes(q)
      return matchDept && matchLoc && matchType && matchQuery
    })
  }, [dept, loc, type, query])

  const deptCounts = useMemo(() => {
    const counts = {}
    jobs.forEach((j) => {
      counts[j.dept] = (counts[j.dept] || 0) + 1
    })
    return counts
  }, [])

  return (
    <section
      id="open-positions"
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-14">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Open Positions
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A handful of{' '}
              <span className="text-[#0276E2] italic">founding</span> seats.
            </h2>

            <p className="mt-4 text-[14px] leading-[1.7] text-black/65 max-w-[520px]">
              A few honest roles to get this studio off the ground. If the listing resonates, drop
              us a short note — a résumé plus two lines on why you are keen is enough to start.
            </p>
          </div>

          {/* Search */}
          <div className="relative lg:min-w-[320px]">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roles…"
              className="w-full h-12 pl-11 pr-4 border-2 border-black bg-white text-[13px] font-medium text-black placeholder:text-black/40 focus:border-[#0276E2] outline-none transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            />
          </div>
        </div>

        {/* Filters */}
        <div
          className="mb-10 pb-6 border-b-2 border-black space-y-4"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 mr-2 hidden sm:inline">
              Team →
            </span>
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`inline-flex items-center gap-2 px-4 h-10 text-[11px] font-bold uppercase tracking-[0.2em] border-2 transition-colors ${
                  dept === d
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black/15 hover:border-black'
                }`}
              >
                {d}
                {d !== 'All Teams' && (
                  <span className={`text-[9px] ${dept === d ? 'text-[#0276E2]' : 'text-black/40'}`}>
                    {deptCounts[d] || 0}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 hidden sm:inline">
                Location →
              </span>
              {locations.map((l) => (
                <button
                  key={l}
                  onClick={() => setLoc(l)}
                  className={`px-3 h-8 text-[10px] font-bold uppercase tracking-[0.2em] border transition-colors ${
                    loc === l
                      ? 'bg-[#0276E2] text-white border-[#0276E2]'
                      : 'bg-white text-black border-black/15 hover:border-[#0276E2] hover:text-[#0276E2]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 hidden sm:inline">
                Type →
              </span>
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-3 h-8 text-[10px] font-bold uppercase tracking-[0.2em] border transition-colors ${
                    type === t
                      ? 'bg-[#0276E2] text-white border-[#0276E2]'
                      : 'bg-white text-black border-black/15 hover:border-[#0276E2] hover:text-[#0276E2]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <span className="ml-auto text-[11px] font-semibold uppercase tracking-[0.25em] text-black/50">
              Showing <span className="text-black">{filtered.length}</span> / {jobs.length}
            </span>
          </div>
        </div>

        {/* Jobs list */}
        {filtered.length > 0 ? (
          <ul className="border-t-2 border-black">
            {filtered.map((j) => (
              <li key={j.id}>
                <a
                  href="#"
                  className="group block border-b-2 border-black py-6 sm:py-7 lg:py-8 transition-colors hover:bg-black/[0.02]"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Title + badges */}
                    <div className="col-span-12 sm:col-span-5">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2]"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {j.dept}
                        </span>
                        {j.badges.map((b) => (
                          <span
                            key={b}
                            className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] ${
                              b === 'Featured'
                                ? 'bg-[#0276E2] text-white'
                                : 'border border-black/15 text-black/70'
                            }`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                      <h3
                        className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-black leading-tight group-hover:text-[#0276E2] transition-colors"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {j.title}
                      </h3>
                    </div>

                    {/* Meta */}
                    <div className="col-span-6 sm:col-span-2">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/40 mb-1"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Location
                      </p>
                      <p
                        className="text-[13px] font-bold text-black"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {j.location} {j.remote && <span className="text-[#0276E2]">· Remote-OK</span>}
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/40 mb-1"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Experience
                      </p>
                      <p
                        className="text-[13px] font-bold text-black"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {j.exp}
                      </p>
                    </div>

                    <div className="col-span-9 sm:col-span-2">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/40 mb-1"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Compensation
                      </p>
                      <p
                        className="text-[13px] font-bold text-black"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {j.salary}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="col-span-3 sm:col-span-1 flex justify-end">
                      <span className="w-11 h-11 flex items-center justify-center border-2 border-black text-black group-hover:bg-[#0276E2] group-hover:border-[#0276E2] group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="border-2 border-dashed border-black/20 py-16 text-center">
            <p
              className="text-[14px] text-black/50"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              No roles match your filters right now. Try widening the search — or{' '}
              <a href="#general" className="text-[#0276E2] font-bold underline">
                send us a general application →
              </a>
            </p>
          </div>
        )}

        {/* General application bar */}
        <div
          id="general"
          className="mt-14 lg:mt-20 relative border-2 border-black p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10"
        >
          <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#0276E2]"></span>
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

          <div className="flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — Don't see your role?
            </p>
            <h4
              className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-black leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Write us anyway. The best teammates don't apply from lists.
            </h4>
          </div>

          <a
            href="mailto:inquiry.techcareer@gmail.com?subject=General%20Application"
            className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#0276E2] transition-colors shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Send a General Application
            <span className="w-10 h-10 bg-[#0276E2] group-hover:bg-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white group-hover:text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OpenPositions
