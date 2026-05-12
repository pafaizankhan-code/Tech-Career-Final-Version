import { services } from '../src/data/services'
import { blogs } from '../src/data/blogs'

const SITE_URL = 'https://www.techcareer.site'

export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/careers`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/sitemap`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/cookies`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const serviceUrls = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const blogUrls = blogs.map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticPages, ...serviceUrls, ...blogUrls].map((entry) => ({
    ...entry,
    lastModified: now,
  }))
}
