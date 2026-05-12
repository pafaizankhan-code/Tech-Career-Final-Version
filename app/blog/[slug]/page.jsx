import BlogDetail from '../../../src/views/BlogDetail'
import { blogs, getBlog } from '../../../src/data/blogs'
import { notFound } from 'next/navigation'

const SITE_URL = 'https://www.techcareer.site'
const BRAND = 'Tech Career IT Solutions LLP'

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getBlog(slug)
  if (!post) return {}

  const seoDescription =
    post.excerpt.length > 158
      ? `${post.excerpt.slice(0, 155).trim().replace(/[.,;]$/, '')}…`
      : post.excerpt
  const url = `${SITE_URL}/blog/${slug}`
  // OG / Twitter titles bypass title.template, so attach the brand explicitly.
  const socialTitle = `${post.title} | ${BRAND}`

  return {
    title: post.title,
    description: seoDescription,
    keywords: post.tags,
    authors: [{ name: post.author || BRAND }],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: socialTitle,
      description: seoDescription,
      url,
      siteName: BRAND,
      locale: 'en_IN',
      publishedTime: post.date,
      authors: [post.author || BRAND],
      tags: post.tags,
      images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@techcareerllp',
      creator: '@techcareerllp',
      title: socialTitle,
      description: seoDescription,
      images: ['/og-default.jpg'],
    },
  }
}

const buildJsonLd = (post) => {
  const url = `${SITE_URL}/blog/${post.slug}`
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en-IN',
    keywords: post.tags?.join(', '),
    articleSection: post.category,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: post.author || BRAND,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: { '@type': 'ImageObject', url: `${SITE_URL}/og-default.jpg`, width: 1200, height: 630 },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/#blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return [articleLd, breadcrumbLd]
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params
  const post = getBlog(slug)
  if (!post) notFound()

  const jsonLdBlocks = buildJsonLd(post)

  return (
    <>
      {jsonLdBlocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <BlogDetail slug={slug} />
    </>
  )
}
