'use client'

import React, { useState } from 'react'
import { Link } from '../lib/router-compat'
import { blogs } from '../data/blogs'

const BlogSection = () => {
  const [hovered, setHovered] = useState(0)

  return (
    <section
      id="blog"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Subtle grid background - matches OurServices */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-[720px]">
            <div
              className="inline-flex items-center gap-3 mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="w-10 h-px bg-[#097CF4]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#097CF4]">
                From The Blog
              </span>
              <span className="w-10 h-px bg-[#097CF4]"></span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              How websites actually{' '}
              <span className="text-[#097CF4] italic">work</span>.
            </h2>

            <p
              className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-black/70"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Plain-English explainers for business owners, students and curious
              minds - no jargon, no ego, just the bits that actually matter.
            </p>
          </div>

          <Link
            to={`/blog/${blogs[0].slug}`}
            className="group self-start lg:self-end inline-flex items-center gap-3 h-12 px-6 border-2 border-black text-black text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Read Featured Post
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
          </Link>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
          {blogs.map((post, i) => {
            const isHovered = hovered === i
            return (
              <article
                key={post.slug}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                className={`group relative p-8 lg:p-10 border-r border-b border-black/10 transition-colors duration-500 flex flex-col ${
                  isHovered ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                {/* Corner blueprint markers */}
                <span
                  className={`pointer-events-none absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 transition-colors duration-500 ${
                    isHovered ? 'border-[#097CF4]' : 'border-black/20'
                  }`}
                ></span>
                <span
                  className={`pointer-events-none absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 transition-colors duration-500 ${
                    isHovered ? 'border-[#097CF4]' : 'border-black/20'
                  }`}
                ></span>

                {/* Category badge + number */}
                <div className="flex items-start justify-between mb-8">
                  <span
                    className={`inline-flex items-center h-8 px-3 border-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${
                      isHovered
                        ? 'border-[#097CF4] bg-[#097CF4] text-white'
                        : 'border-black text-black group-hover:bg-[#097CF4] group-hover:border-[#097CF4] group-hover:text-white'
                    }`}
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {post.category}
                  </span>

                  <span
                    className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
                      isHovered ? 'text-[#097CF4]' : 'text-black/30'
                    }`}
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    - {post.no}
                  </span>
                </div>

                {/* Meta row */}
                <div
                  className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 transition-colors duration-500 ${
                    isHovered ? 'text-white/60' : 'text-black/50'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span>{post.date}</span>
                  <span
                    className={`w-1 h-1 rounded-full ${
                      isHovered ? 'bg-white/40' : 'bg-black/30'
                    }`}
                  ></span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-[24px] lg:text-[28px] font-extrabold leading-[1.2] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {post.title}
                </h3>

                {/* Accent underline */}
                <span
                  className={`block h-[2px] bg-[#097CF4] mt-4 mb-5 transition-all duration-500 ${
                    isHovered ? 'w-20' : 'w-10'
                  }`}
                ></span>

                {/* Excerpt */}
                <p
                  className={`text-[14px] leading-[1.7] flex-1 transition-colors duration-500 ${
                    isHovered ? 'text-white/70' : 'text-black/65'
                  }`}
                >
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] border transition-colors duration-500 ${
                        isHovered
                          ? 'border-white/30 text-white/80'
                          : 'border-black/15 text-black/70'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className={`mt-8 inline-flex items-center justify-between w-full pt-5 border-t transition-colors duration-500 ${
                    isHovered ? 'border-white/20' : 'border-black/10'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
                    Read Article
                  </span>
                  <span
                    className={`w-9 h-9 flex items-center justify-center transition-colors duration-500 ${
                      isHovered
                        ? 'bg-[#097CF4] text-white'
                        : 'bg-black text-white group-hover:bg-[#097CF4]'
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  </span>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogSection