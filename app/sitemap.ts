import { MetadataRoute } from 'next';
import { DATA } from '@/constants/data';
import { SITE_URL } from '@/constants/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Root URL
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];

  // Dynamic project detail routes
  const projectRoutes: MetadataRoute.Sitemap = DATA.projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
