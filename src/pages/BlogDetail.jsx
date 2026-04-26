import React, { useEffect, useMemo } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getBlog, getRelatedBlogs } from '../data/blogs'
import Seo, { SITE } from '../components/Seo'
import StartProject from '../components/StartProject'

const BlogDetail = () => {
  const { slug } = useParams()
  const post = useMemo(() => getBlog(slug), [slug])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!post) {
    return <Navigate to="/" replace />
  }

  const related = getRelatedBlogs(slug, 2)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.brand,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    datePublished: post.date,
    mainEntityOfPage: `${SITE.baseUrl}/blog/${post.slug}`,
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Seo
        title={`${post.title} | Tech Career IT Solutions Blog`}
        description={post.excerpt}
        canonical={`${SITE.baseUrl}/blog/${post.slug}`}
        ogType="article"
        jsonLd={articleJsonLd}
      />

      {/* HERO */}
      <section className="relative bg-white pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black/50 mb-8"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-[#097CF4] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/#blog" className="hover:text-[#097CF4] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-black/80">{post.category}</span>
          </nav>

          {/* Section eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="w-10 h-px bg-[#097CF4]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
              {post.category} — Article {post.no}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black/60"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-black/40"></span>
              {post.author}
            </span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="relative bg-white pb-20 lg:pb-28">
        <div className="relative max-w-[760px] mx-auto px-6 lg:px-10">
          {/* Intro / lede */}
          <p
            className="text-[18px] sm:text-[20px] leading-[1.7] text-black/80 border-l-2 border-[#097CF4] pl-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {post.intro}
          </p>

          {/* Sections */}
          <div className="mt-14 space-y-12">
            {post.sections.map((s, i) => (
              <section key={s.heading} className="relative">
                <div
                  className="flex items-center gap-3 mb-4"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                    — {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2
                  className="text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold text-black leading-[1.2] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {s.heading}
                </h2>
                <span className="block w-12 h-[2px] bg-[#097CF4] mt-4 mb-5"></span>
                <p
                  className="text-[16px] leading-[1.85] text-black/75"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {s.body}
                </p>
              </section>
            ))}
          </div>

          {/* Takeaway / pull quote */}
          <aside className="mt-16 relative border-2 border-black p-8 lg:p-10">
            <span className="absolute -top-3 -left-3 w-6 h-6 bg-[#097CF4]"></span>
            <span className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-black bg-white"></span>

            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#097CF4] mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              — In short
            </p>
            <p
              className="text-[20px] sm:text-[22px] lg:text-[24px] font-extrabold text-black leading-[1.35]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {post.takeaway}
            </p>
          </aside>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 mr-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Tagged
            </span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/15 text-black/70 hover:border-[#097CF4] hover:text-[#097CF4] transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-black/10">
            <Link
              to="/#blog"
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:text-[#097CF4] transition-colors"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back To All Articles
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="relative bg-black text-white py-20 lg:py-24 overflow-hidden">
          {/* Subtle dots */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          ></div>

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                Keep Reading
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.1] tracking-tight mb-12"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Related <span className="italic text-[#097CF4]">articles</span>.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group relative block p-8 lg:p-10 border border-white/15 hover:border-[#097CF4] hover:bg-white/[0.03] transition-all duration-300"
                >
                  {/* Corner markers */}
                  <span className="pointer-events-none absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-white/20 group-hover:border-[#097CF4] transition-colors"></span>
                  <span className="pointer-events-none absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-white/20 group-hover:border-[#097CF4] transition-colors"></span>

                  <div
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-5"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    <span className="text-[#097CF4]">— {r.no}</span>
                    <span>{r.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40"></span>
                    <span>{r.readTime}</span>
                  </div>

                  <h3
                    className="text-[24px] lg:text-[28px] font-extrabold leading-[1.2] tracking-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {r.title}
                  </h3>

                  <span className="block w-10 h-[2px] bg-[#097CF4] mt-4 mb-5 group-hover:w-20 transition-all duration-500"></span>

                  <p className="text-[14px] leading-[1.7] text-white/70">
                    {r.excerpt}
                  </p>

                  <span
                    className="mt-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white group-hover:text-[#097CF4] transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Read Article
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <StartProject />
    </div>
  )
}

export default BlogDetail
