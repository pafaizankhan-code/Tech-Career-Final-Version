import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'How quickly will I get a reply?',
    a: 'Every inbound message is read and triaged by a senior strategist within four business hours. If your message comes in during Indian working hours, you will usually hear back the same day — often within 90 minutes.',
  },
  {
    q: 'What does your typical engagement look like?',
    a: 'We start with a one-week discovery sprint (₹ paid) that ends in a written scope, timeline, and fixed or T&M proposal. From there, most projects run 9 – 20 weeks with two-week sprints, Friday demos, and a public burn-down chart.',
  },
  {
    q: 'Do you sign NDAs before a call?',
    a: 'Yes. A mutual NDA takes us under ten minutes to turn around — send yours or we can send ours. We also accept DocuSign, Adobe Sign, or a simple PDF with e-signatures.',
  },
  {
    q: 'What project sizes do you work on?',
    a: 'Our smallest engagements are around ₹5 L (one-week advisory sprints, audit, or a discrete feature build). Our largest are multi-year retainers north of ₹5 Cr. Most sit between ₹15 L and ₹80 L.',
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'Both. About 40% of our book is early-stage founders and 60% is enterprise. We keep the same team, same process, same code quality standards for every engagement — and the same ESOP-grade commitment.',
  },
  {
    q: 'Can I see the code you ship?',
    a: 'Absolutely. We are happy to share redacted GitHub repos, architecture diagrams, and test coverage reports for past projects under NDA. Ask on your first call — most clients are surprised at how open our craft review goes.',
  },
  {
    q: 'Where are you based and how do you work remotely?',
    a: 'Headquartered in Ahmedabad with offices in Bengaluru and Dubai. We are remote-first and async-default — core overlap hours from 12:00 – 18:00 IST. We have shipped for clients across 14 countries without ever requiring on-site presence.',
  },
  {
    q: 'What happens after the project goes live?',
    a: 'Every build comes with a 30-day bug-fix window. Beyond that we offer monthly support retainers, quarterly health reviews, and a 24/7 on-call tier for production incidents. 98% of our clients continue with us after go-live.',
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
              <span className="w-10 h-px bg-[#0276E2]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0276E2]">
                Frequently Asked
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Common <span className="text-[#0276E2] italic">questions,</span> clearly answered.
            </h2>

            <p className="mt-6 text-[14px] leading-[1.7] text-black/65 max-w-[380px]">
              A few of the questions we get most often. Still wondering? Ask us directly — we promise to answer honestly.
            </p>

            {/* Contact card */}
            <div className="mt-8 border-2 border-black p-6 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0276E2]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0276E2]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0276E2] mb-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Didn't Find Your Answer?
              </p>
              <p
                className="text-[18px] font-extrabold text-black leading-tight mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                We love the uncommon <span className="italic text-[#0276E2]">ones.</span>
              </p>
              <Link
                to="#contact-form"
                className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:text-[#0276E2] transition-colors"
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
                          isOpen ? 'text-[#0276E2]' : 'text-black/40 group-hover:text-[#0276E2]'
                        }`}
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`flex-1 text-xl sm:text-2xl lg:text-[28px] font-extrabold leading-[1.25] tracking-tight transition-colors ${
                          isOpen ? 'text-[#0276E2]' : 'text-black group-hover:text-[#0276E2]'
                        }`}
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 w-10 h-10 flex items-center justify-center border-2 transition-colors ${
                          isOpen
                            ? 'bg-[#0276E2] border-[#0276E2] text-white'
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
                        <div className="border-l-2 border-[#0276E2] pl-5">
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
