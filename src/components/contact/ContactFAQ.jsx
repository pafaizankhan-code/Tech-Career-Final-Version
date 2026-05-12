'use client'

import React, { useState } from 'react'
import { Link } from '../../lib/router-compat'

const faqs = [
  {
    q: 'How quickly will I get a reply?',
    a: 'The founder reads every message personally. You will hear back within 24 hours on email and usually within a few hours on WhatsApp during the day (Mon to Sat, 10:00 – 20:00 IST).',
  },
  {
    q: 'What does a typical project look like?',
    a: 'A free 30-minute discovery call, a written scope with a fixed quote before any work, Figma designs you sign off, weekly demos on a staging link, and a handover walkthrough at the end. Most builds run 2 – 8 weeks.',
  },
  {
    q: 'Do you sign an NDA before a call?',
    a: 'Yes — happily. Send yours or we can send ours. A simple e-signed PDF is enough. Your ideas stay your ideas.',
  },
  {
    q: 'What size projects do you work on?',
    a: 'Smallest: basic business websites and landing pages from around ₹50K. Most builds sit between ₹2 L and ₹10 L (e-commerce stores, custom CRM / HRMS, mobile apps). Larger custom projects are quoted individually.',
  },
  {
    q: 'Do you work with startups or only established businesses?',
    a: 'Both — we are built for small and mid-sized Indian businesses, early-stage founders and growing brands. If you know what you want to build and want it done honestly, you are our kind of client.',
  },
  {
    q: 'Will I own the code and accounts?',
    a: 'Absolutely. Domain, hosting, GitHub, analytics, ad accounts — everything is created in your name or transferred to you at handover. No vendor lock-in, ever.',
  },
  {
    q: 'Where are you based and how do you work remotely?',
    a: 'We are based at iHub, University Area, Ahmedabad. For clients outside Gujarat, we work entirely over WhatsApp, email, and Google Meet with weekly video demos — no on-site visits required.',
  },
  {
    q: 'What happens after the project goes live?',
    a: 'Every build comes with a free 30-day bug-fix window after launch. Beyond that we offer an optional monthly retainer for small changes, updates, and SEO / digital marketing. No retainer is required, and it is opt-in.',
  },
]

const ContactFAQ = () => {
  const [open, setOpen] = useState(0)

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT — intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Frequently Asked
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Common <span className="text-[#097CF4] italic">questions,</span> clearly answered.
            </h2>

            <p className="mt-6 text-[14px] leading-[1.7] text-black/65 max-w-[380px]">
              A few of the questions we get most often. Still wondering? Ask us directly — we promise to answer honestly.
            </p>

            {/* Contact card */}
            <div className="mt-8 border-2 border-black p-6 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Didn't Find Your Answer?
              </p>
              <p
                className="text-[18px] font-extrabold text-black leading-tight mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                We love the uncommon <span className="italic text-[#097CF4]">ones.</span>
              </p>
              <Link
                to="#contact-form"
                className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:text-[#097CF4] transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Ask a Custom Question
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT — accordion */}
          <div className="lg:col-span-8">
            <ul className="border-t-2 border-black">
              {faqs.map((f, i) => {
                const isOpen = open === i
                return (
                  <li key={f.q} className="border-b-2 border-black">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full text-left flex items-start gap-4 sm:gap-6 py-5 sm:py-6 group"
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
                        className={`flex-1 text-xl sm:text-2xl lg:text-[28px] font-extrabold leading-[1.25] tracking-tight transition-colors ${
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
                      <div className="pl-0 sm:pl-14 pb-8 pr-16">
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
  )
}

export default ContactFAQ