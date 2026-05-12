import Sitemap from '../../src/views/Sitemap'

export const metadata = {
  title: 'Sitemap | Tech Career IT Solutions',
  description: 'Full sitemap of techcareer.site — find every page on the Tech Career IT Solutions website.',
  alternates: { canonical: '/sitemap' },
}

export default function SitemapPage() {
  return <Sitemap />
}
