import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { k: '< 24h', v: 'First Reply' },
  { k: 'iHub', v: 'Ahmedabad Base' },
  { k: 'Free', v: 'Discovery Call' },
  { k: 'Direct', v: 'Founder Access' },
]

const ContactHero = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        })
      )
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative bg-white pt-20 lg:pt-28 pb-16 lg:pb-20 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px)',
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
          <span className="text-black font-semibold">Contact</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-75"></span>
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[#097CF4]"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Now Open · IST {time} · Replying Live
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[96px] xl:text-[108px] font-extrabold text-black leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Say <span className="text-[#097CF4] italic">hello.</span>
              <br />
              We'll reply like
              <br />
              humans do.
            </h1>

            <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.7] text-black/70 max-w-[680px]">
              No chatbots, no call-centre scripts. Every message lands directly with the founder,
              and you get a personal reply within 24 hours — usually faster on WhatsApp. Tell us
              what you're building.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 h-14 pl-6 pr-2 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#097CF4] transition-colors"
              >
                Send a Message
                <span className="w-10 h-10 bg-[#097CF4] group-hover:bg-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-white group-hover:text-[#097CF4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>

              <a
                href="tel:+917096608771"
                className="group inline-flex items-center gap-3 h-14 px-6 border-2 border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
              >
                Call Us Directly
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.9 1.37l.9 2.69a2 2 0 01-.45 2L8.5 10.5a11 11 0 005 5l1.44-1.13a2 2 0 012-.45l2.69.9A2 2 0 0121 16.72V19a2 2 0 01-2 2A16 16 0 013 5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Side credential card */}
          <div className="lg:col-span-4">
            <div className="relative bg-[#097CF4] text-white p-6 lg:p-7 shadow-[10px_10px_0_0_#000]">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-white"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-white"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Direct Lines
              </p>

              <dl className="space-y-4 text-[13px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                <div className="pb-4 border-b border-white/30">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">Email · All Inquiries</dt>
                  <dd>
                    <a href="mailto:inquiry.techcareer@gmail.com" className="font-bold hover:text-black transition-colors break-all">
                      inquiry.techcareer@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="pb-4 border-b border-white/30">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">New Projects</dt>
                  <dd>
                    <a href="mailto:inquiry.techcareer@gmail.com?subject=New%20Project" className="font-bold hover:text-black transition-colors break-all">
                      inquiry.techcareer@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="pb-4 border-b border-white/30">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">Careers</dt>
                  <dd>
                    <a href="mailto:inquiry.techcareer@gmail.com?subject=Careers" className="font-bold hover:text-black transition-colors break-all">
                      inquiry.techcareer@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">Phone / WhatsApp</dt>
                  <dd>
                    <a href="tel:+917096608771" className="font-bold hover:text-black transition-colors">
                      +91 70966 08771
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t-2 border-black">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`py-8 px-1 lg:px-6 ${
                i !== stats.length - 1 ? 'lg:border-r-2 border-black' : ''
              } ${i < 2 ? 'border-b-2 lg:border-b-0 border-black' : ''} ${
                i % 2 === 1 ? 'border-l-2 lg:border-l-0 border-black' : ''
              }`}
            >
              <p
                className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-none"
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
  )
}

export default ContactHero
