import React, { useState } from 'react'

export const homeFaqs = [
  {
    q: 'You are a new studio — why should I trust you with my project?',
    a: 'Fair question. Tech Career IT Solutions LLP is a new company, but the people building your product are not new to building products. Our first clients get the best of both worlds — launch-friendly pricing, a founder-led team with something to prove, and a fixed-quote scope so you are not taking a blind risk.',
  },
  {
    q: 'How long will it take to build my website, app or CRM?',
    a: 'A simple business website: 2–3 weeks. An e-commerce store: 2–4 weeks. A custom CRM, HRMS or mobile app: 4–8 weeks for a first version. We commit to a fixed timeline in the written scope — and if we ever slip, we tell you before the deadline, not after.',
  },
  {
    q: 'How do you price projects? Any hidden costs?',
    a: 'We quote a fixed price based on a written scope before any work starts — with a clear breakdown of design, development and any third-party costs (hosting, domains, Razorpay, etc.). GST invoices included. No change-order theatre — if scope grows mid-project, we quote the delta upfront.',
  },
  {
    q: 'Where are you based? Can we meet in person?',
    a: 'We are based at iHub, University Area, Ahmedabad, Gujarat — 380015. If you are in or near Ahmedabad, we can absolutely meet at our office or yours. For clients outside Gujarat (or India), we work over WhatsApp, email and Google Meet with weekly demo calls.',
  },
]

const faqs = [
  {
    id: 1,
    tag: 'Trust',
    question: 'You are a new studio — why should I trust you with my project?',
    answer:
      'Fair question. Tech Career IT Solutions LLP is a new company, but the people building your product are not new to building products. Our first clients get the best of both worlds — launch-friendly pricing, a founder-led team with something to prove, and a fixed-quote scope so you are not taking a blind risk.',
    initials: 'Q1',
    accent: 'blue',
  },
  {
    id: 2,
    tag: 'Timeline',
    question: 'How long will it take to build my website, app or CRM?',
    answer:
      'A simple business website: 2–3 weeks. An e-commerce store: 2–4 weeks. A custom CRM, HRMS or mobile app: 4–8 weeks for a first version. We commit to a fixed timeline in the written scope — and if we ever slip, we tell you before the deadline, not after.',
    initials: 'Q2',
    accent: 'black',
  },
  {
    id: 3,
    tag: 'Pricing',
    question: 'How do you price projects? Any hidden costs?',
    answer:
      'We quote a fixed price based on a written scope before any work starts — with a clear breakdown of design, development and any third-party costs (hosting, domains, Razorpay, etc.). GST invoices included. No change-order theatre — if scope grows mid-project, we quote the delta upfront.',
    initials: 'Q3',
    accent: 'blue',
  },
  {
    id: 4,
    tag: 'Location',
    question: 'Where are you based? Can we meet in person?',
    answer:
      'We are based at iHub, University Area, Ahmedabad, Gujarat — 380015. If you are in or near Ahmedabad, we can absolutely meet at our office or yours. For clients outside Gujarat (or India), we work over WhatsApp, email and Google Meet with weekly demo calls.',
    initials: 'Q4',
    accent: 'black',
  },
]

const techStack = ['React', 'Next.js', 'Node.js', 'React Native', 'Shopify', 'WordPress', 'Figma', 'Tailwind']

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const t = faqs[active]

  return (
    <section
      id="faq"
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
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Honest FAQ
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Real questions.{' '}
              <span className="text-[#097CF4] italic">Honest</span> answers.
            </h2>
          </div>

          <div
            className="flex items-center gap-3 shrink-0"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <button
              onClick={() => setActive((i) => (i - 1 + faqs.length) % faqs.length)}
              className="w-12 h-12 border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              aria-label="Previous question"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/60 px-2">
              <span className="text-black">{String(active + 1).padStart(2, '0')}</span>
              <span className="mx-1 text-black/30">/</span>
              {String(faqs.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setActive((i) => (i + 1) % faqs.length)}
              className="w-12 h-12 border-2 border-black bg-black text-white flex items-center justify-center hover:bg-[#097CF4] hover:border-[#097CF4] transition-colors"
              aria-label="Next question"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Feature FAQ */}
          <article
            key={t.id}
            className="relative lg:col-span-8 border-2 border-black bg-white p-8 sm:p-10 lg:p-14 animate-[fadeUp_0.4s_ease_both]"
          >
            <span className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#097CF4]"></span>
            <span className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#097CF4]"></span>
            <span className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#097CF4]"></span>
            <span className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#097CF4]"></span>

            <span
              className="absolute top-6 right-8 lg:top-10 lg:right-12 text-[120px] lg:text-[180px] leading-none font-black text-[#097CF4]/10 select-none pointer-events-none"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              ?
            </span>

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1.5 bg-[#097CF4] text-white text-[10px] font-bold uppercase tracking-[0.3em]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {t.tag}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                FAQ · {String(active + 1).padStart(2, '0')}
              </span>
            </div>

            <h3
              className="relative text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-black leading-[1.25] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t.question}
            </h3>

            <p className="relative mt-5 text-[15px] sm:text-[16px] leading-[1.75] text-black/75 max-w-[680px]">
              {t.answer}
            </p>

            <div className="mt-8 lg:mt-10 pt-6 border-t-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className={`w-14 h-14 flex items-center justify-center text-white text-[13px] font-extrabold border-2 ${
                    t.accent === 'blue' ? 'bg-[#097CF4] border-[#097CF4]' : 'bg-black border-black'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {t.initials}
                </span>
                <div>
                  <p
                    className="text-[13px] font-extrabold text-black leading-tight"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Answered by the founding team
                  </p>
                  <p className="text-[11px] text-black/60 mt-0.5">
                    Tech Career IT Solutions LLP ·{' '}
                    <span className="text-[#097CF4] font-semibold">Ahmedabad</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {faqs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 transition-all ${
                      i === active ? 'w-8 bg-[#097CF4]' : 'w-3 bg-black/20 hover:bg-black/40'
                    }`}
                    aria-label={`View question ${i + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </article>

          {/* Side stack */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Availability card */}
            <div className="bg-black text-white p-6 sm:p-8 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Availability
              </p>

              <p
                className="text-[44px] lg:text-[54px] font-extrabold leading-[0.95]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Taking our
                <br />
                <span className="text-[#097CF4] italic">first</span> clients.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-[#097CF4] animate-ping opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-[#097CF4]"></span>
                </span>
                <span
                  className="text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Open · Apr 2026
                </span>
              </div>

              <p
                className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/60"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Launch-client pricing for a limited<br />
                number of projects this quarter.
              </p>
            </div>

            {/* Other questions */}
            <div className="border-2 border-black bg-white p-6 flex-1 relative">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Other Questions
              </p>

              <ul className="divide-y divide-black/10">
                {faqs.map((q, i) => (
                  <li key={q.id}>
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full text-left py-3 flex items-center gap-3 transition-colors ${
                        i === active ? 'text-[#097CF4]' : 'text-black hover:text-[#097CF4]'
                      }`}
                    >
                      <span
                        className={`shrink-0 w-8 h-8 flex items-center justify-center text-[10px] font-extrabold border-2 ${
                          i === active
                            ? 'bg-[#097CF4] border-[#097CF4] text-white'
                            : 'bg-white border-black text-black'
                        }`}
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {q.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-[12px] font-bold truncate"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {q.tag}
                        </p>
                        <p className="text-[11px] text-black/50 truncate">{q.question}</p>
                      </div>
                      {i === active && <span className="w-1.5 h-1.5 rounded-full bg-[#097CF4]"></span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Tech stack marquee */}
        <div className="mt-16 lg:mt-20 relative border-t-2 border-b-2 border-black bg-white">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-white z-10 [mask-image:linear-gradient(to_right,black_40%,transparent)]"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-white z-10 [mask-image:linear-gradient(to_left,black_40%,transparent)]"></div>

          <div className="flex overflow-hidden">
            <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
              {[...techStack, ...techStack].map((l, i) => (
                <span
                  key={i}
                  className="flex items-center gap-6 px-8 py-6 text-[15px] sm:text-[18px] font-black tracking-[0.35em] text-black/80"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {l}
                  <span className="w-1.5 h-1.5 bg-[#097CF4] rounded-full"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
