import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '80+', label: 'Global Clients' },
  { value: '98%', label: 'Client Retention' },
]

const techStack = [
  'React',
  'Node.js',
  'Python',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'Next.js',
  'MongoDB',
  'PostgreSQL',
  'TensorFlow',
  'GraphQL',
]

const Banner = () => {
  return (
    <section className="relative bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      ></div>

    

      {/* Vertical side label */}
      <div className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 items-center gap-3 -rotate-90 origin-left">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/50"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Est. 2013 · Tech Career IT Solutions LLP
        </span>
        <span className="w-12 h-px bg-[#0276E2]"></span>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 xl:pl-12 py-10 sm:py-16 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — content */}
          <div className="lg:col-span-7 relative">
            {/* Eyebrow */}
           

            {/* Headline */}
            <h1
              className="text-[40px] sm:text-[56px] lg:text-[76px] xl:text-[84px] font-extrabold text-black leading-[0.98] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Crafting
              <br />
              <span className="inline-flex items-baseline gap-3 sm:gap-5">
                <span className="text-[#0276E2] italic">Digital</span>
                <span className="hidden sm:inline-block w-16 lg:w-24 h-[3px] bg-black translate-y-[-10px]"></span>
              </span>
              <br />
              Excellence.
            </h1>

            {/* Lede */}
            <p
              className="mt-6 lg:mt-8 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.7] text-black/70"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We are a full-service IT consultancy partnering with ambitious teams to design,
              build, and scale software that earns trust —
              <span className="text-black font-semibold"> from boardroom to production</span>.
            </p>

            {/* CTAs */}
            <div
              className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#0276E2] transition-colors duration-300"
              >
                Start a Project
                <span className="w-10 h-10 bg-[#0276E2] group-hover:bg-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white group-hover:text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 h-14 px-6 border-2 border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Explore Our Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <div className="hidden sm:flex items-center gap-3 pl-2 text-[11px] uppercase tracking-[0.2em] text-black/60">
                <span className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-8 h-8 border-2 border-white bg-black flex items-center justify-center text-white font-bold text-[10px]"
                    >
                      {String.fromCharCode(64 + i)}
                    </span>
                  ))}
                  <span className="w-8 h-8 border-2 border-white bg-[#0276E2] flex items-center justify-center text-white font-bold text-[9px]">
                    +80
                  </span>
                </span>
                <span className="text-black font-semibold">Trusted by leaders</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-black/15">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`${i !== stats.length - 1 ? 'sm:border-r sm:border-black/10 sm:pr-6' : ''}`}
                >
                  <p
                    className="text-3xl lg:text-4xl font-extrabold text-black leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.value}
                    <span className="text-[#0276E2]">.</span>
                  </p>
                  <p
                    className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/60"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              {/* Floating badge — top right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-white border-2 border-black px-4 py-3 shadow-[8px_8px_0_0_#0276E2]">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/60" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  ISO 27001
                </p>
                <p className="text-[13px] font-extrabold text-black mt-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Certified Partner
                </p>
              </div>

              {/* Main card — code/console mockup */}
              <div className="relative bg-white border-2 border-black">
                {/* Window chrome */}
                <div className="flex items-center justify-between px-4 py-3 border-b-2 border-black bg-black text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0276E2]"></span>
                  </div>
                  <p
                    className="text-[10px] font-mono tracking-wider text-white/70"
                    style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}
                  >
                    ~/techcareer/deploy.sh
                  </p>
                  <span className="text-[10px] text-white/50 font-semibold uppercase tracking-[0.15em]">
                    Live
                  </span>
                </div>

                <div
                  className="p-5 sm:p-6 space-y-3 text-[12px] sm:text-[13px]"
                  style={{ fontFamily: 'ui-monospace, Menlo, monospace' }}
                >
                  <p>
                    <span className="text-[#0276E2]">$</span>{' '}
                    <span className="text-black font-semibold">techcareer</span>{' '}
                    <span className="text-black/50">init</span>{' '}
                    <span className="text-black">--scale enterprise</span>
                  </p>
                  <p className="text-black/50 pl-4">→ provisioning cloud stack…</p>
                  <p className="text-black/50 pl-4">→ deploying micro-services…</p>
                  <p className="text-black/50 pl-4">→ running security audit…</p>
                  <div className="pl-4 flex items-center gap-2 text-black font-semibold">
                    <svg className="w-3.5 h-3.5 text-[#0276E2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Deployment · Successful
                  </div>
                  <div className="pt-2 border-t border-black/10">
                    <p>
                      <span className="text-[#0276E2]">$</span>{' '}
                      <span className="text-black font-semibold">status</span>
                      <span className="inline-block w-2 h-4 bg-[#0276E2] align-middle ml-1 animate-pulse"></span>
                    </p>
                  </div>
                </div>

                {/* Footer strip */}
                <div className="flex items-center justify-between px-5 py-3 border-t-2 border-black bg-[#0276E2] text-white">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.25em]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    99.99% Uptime
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-[0.2em]"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    v 4.2.1
                  </span>
                </div>
              </div>

              {/* Floating metric card — bottom left */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-black text-white p-4 w-[180px] sm:w-[200px] shadow-[8px_8px_0_0_#0276E2]">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    This Quarter
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#0276E2] rounded-full"></span>
                </div>
                <p
                  className="text-3xl font-extrabold leading-none"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  +42<span className="text-[#0276E2]">%</span>
                </p>
                <p className="text-[10px] text-white/60 mt-1.5 uppercase tracking-[0.2em]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Client Growth
                </p>

                <div className="mt-3 flex items-end gap-1 h-8">
                  {[30, 50, 35, 70, 55, 90, 75].map((h, i) => (
                    <span
                      key={i}
                      className={`flex-1 ${i === 5 ? 'bg-[#0276E2]' : 'bg-white/30'}`}
                      style={{ height: `${h}%` }}
                    ></span>
                  ))}
                </div>
              </div>

              {/* Small accent square */}
              <span className="absolute -z-10 top-8 -left-6 w-20 h-20 border-2 border-[#0276E2] hidden sm:block"></span>
              <span className="absolute -z-10 -bottom-10 right-8 w-14 h-14 bg-black hidden sm:block"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative border-t-2 border-b-2 border-black bg-white">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_right,black_40%,transparent)]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-white z-10 [mask-image:linear-gradient(to_left,black_40%,transparent)]"></div>

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-6 px-8 py-5 text-[13px] font-bold uppercase tracking-[0.3em] text-black/80"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {t}
                <span className="w-1.5 h-1.5 bg-[#0276E2] rounded-full"></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Banner
