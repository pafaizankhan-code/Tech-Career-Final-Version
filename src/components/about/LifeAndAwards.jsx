import React from 'react'

const howWeWork = [
  { k: '💬', label: 'Direct WhatsApp Line', sub: 'Founder on chat · not a ticket queue' },
  { k: '📝', label: 'Written Scopes', sub: 'Fixed quote before any code is written' },
  { k: '🗓️', label: 'Weekly Demo Fridays', sub: 'Staging link every Friday · no surprises' },
  { k: '🤝', label: 'NDA on Request', sub: 'Your ideas stay yours · signed on day zero' },
  { k: '🧾', label: 'GST Invoicing', sub: 'Proper invoices · transparent breakdown' },
  { k: '🛟', label: 'Launch Support', sub: '30 days post-launch · bug fixes included' },
]

const commitments = [
  { year: 'Day 1', title: 'Free Discovery Call', issuer: '30-minute kickoff', tag: 'No Fee' },
  { year: 'Week 1', title: 'Written Scope & Fixed Quote', issuer: 'Before any dev work', tag: 'Locked' },
  { year: 'Weekly', title: 'Friday Demo + Staging Link', issuer: 'Clickable progress', tag: 'Transparent' },
  { year: 'Launch', title: 'Handover Walkthrough', issuer: 'Your team owns the product', tag: 'Included' },
  { year: '+30d', title: 'Free Bug-Fix Window', issuer: 'Anything we shipped, we fix', tag: 'Zero Cost' },
  { year: 'Always', title: 'Your Code, Your Accounts', issuer: 'No vendor lock-in, no games', tag: 'Owned' },
]

const founderNote = {
  signature: 'Faizan Pathan',
  role: 'Founder · Tech Career IT Solutions LLP LLP',
  lines: [
    'We do not have ten years of case studies yet.',
    'What we have is a small team, a clear focus, and the patience to earn every client the slow way — by doing the work well.',
    'If you are a business in Ahmedabad or anywhere in India looking for a studio that will pick up the phone, write an honest quote, and ship what it promised — we would love to talk.',
  ],
}

const LifeAndAwards = () => {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* HOW WE WORK */}
        <div className="mb-20 lg:mb-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-[720px]">
              <div
                className="inline-flex items-center gap-3 mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className="w-10 h-px bg-[#097CF4]"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                  How We Work
                </span>
              </div>

              <h2
                className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A studio that takes{' '}
                <span className="text-[#097CF4] italic">clients</span> seriously.
              </h2>
            </div>

            <p
              className="max-w-[360px] text-[14px] leading-[1.7] text-black/65"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We are small on purpose — which means every client gets the full attention a big agency saves for its biggest accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
            {howWeWork.map((p) => (
              <div
                key={p.label}
                className="group relative p-6 lg:p-8 border-r border-b border-black/10 bg-white hover:bg-[#097CF4] hover:text-white transition-colors duration-500"
              >
                <span className="pointer-events-none absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-black/15 group-hover:border-white transition-colors"></span>
                <span className="pointer-events-none absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-black/15 group-hover:border-white transition-colors"></span>

                <div className="text-[36px] mb-4">{p.k}</div>
                <h3
                  className="text-[20px] font-extrabold leading-tight tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {p.label}
                </h3>
                <p
                  className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-black/50 group-hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {p.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* OUR COMMITMENTS + FOUNDER'S NOTE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Commitments list */}
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Our Commitments
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What every client gets,{' '}
              <span className="text-[#097CF4] italic">in writing.</span>
            </h2>

            <div className="mt-8 border-t-2 border-black">
              {commitments.map((a) => (
                <div
                  key={`${a.year}-${a.title}`}
                  className="group grid grid-cols-12 gap-3 py-5 border-b-2 border-black items-center hover:bg-black/[0.02] transition-colors"
                >
                  <div className="col-span-3 sm:col-span-2">
                    <span
                      className="text-[14px] sm:text-[18px] font-extrabold text-black"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {a.year}
                      <span className="text-[#097CF4]">.</span>
                    </span>
                  </div>
                  <div className="col-span-6 sm:col-span-7">
                    <h3
                      className="text-[15px] sm:text-[18px] font-extrabold text-black leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-[11px] text-black/55 mt-0.5">{a.issuer}</p>
                  </div>
                  <div className="col-span-3 flex justify-end">
                    <span
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/15 text-black/70"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {a.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder's note column */}
          <div className="lg:col-span-5">
            <div className="bg-black text-white p-6 sm:p-8 relative">
              <span className="pointer-events-none absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#097CF4]"></span>
              <span className="pointer-events-none absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-6"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — A Note from the Founder
              </p>

              <div className="space-y-4">
                {founderNote.lines.map((line, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-[1.65] italic text-white/90"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-3">
                <span
                  className="w-10 h-10 bg-[#097CF4] text-white flex items-center justify-center text-[11px] font-extrabold"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  FP
                </span>
                <div>
                  <p
                    className="text-[13px] font-extrabold text-white leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {founderNote.signature}
                  </p>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 mt-0.5"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {founderNote.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & stack */}
            <div className="mt-6 border-2 border-black p-5 relative">
              <span className="pointer-events-none absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#097CF4]"></span>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                — Tools We Work With
              </p>

              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'React Native', 'Flutter', 'Shopify', 'WooCommerce', 'WordPress', 'Figma', 'Tailwind', 'PostgreSQL', 'MongoDB', 'Razorpay', 'Stripe'].map(
                  (c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifeAndAwards
