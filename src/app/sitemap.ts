import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { articles, categories, doctors } from '@/data/mock';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/qidiruv`,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/ishonch`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/maqola/${a.slug}`,
    lastModified: a.updatedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE_URL}/kategoriya/${c.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const doctorPages: MetadataRoute.Sitemap = doctors.map((d) => ({
    url: `${SITE_URL}/shifokor/${d.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...categoryPages, ...doctorPages];
}
