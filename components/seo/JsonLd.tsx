import { DATA } from '@/constants/data';
import { SITE_URL } from '@/constants/metadata';

export const RootJsonLd = () => {
  const allSkills = DATA.skills.flatMap((s) => s.items);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: DATA.personal.name,
    jobTitle: DATA.personal.role,
    description: DATA.personal.bio,
    url: SITE_URL,
    image: `${SITE_URL}${DATA.personal.avatar}`,
    email: `mailto:${DATA.personal.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: DATA.education[0]?.institution || 'Parul University',
    },
    sameAs: DATA.social.map((s) => s.url),
    knowsAbout: allSkills,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Love Ghariwala Portfolio',
    description: 'Personal portfolio of Love Ghariwala - Full Stack Developer & Next.js Specialist',
    publisher: {
      '@id': `${SITE_URL}/#person`,
    },
    inLanguage: 'en-US',
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: 'Love Ghariwala - Full Stack Developer Portfolio',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    mainEntity: {
      '@id': `${SITE_URL}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
};

interface ProjectJsonLdProps {
  project: (typeof DATA.projects)[number];
}

export const ProjectJsonLd = ({ project }: ProjectJsonLdProps) => {
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: 'WebApplication',
    operatingSystem: 'All',
    url: `${SITE_URL}/projects/${project.slug}`,
    image: project.image ? `${SITE_URL}${project.image}` : undefined,
    author: {
      '@type': 'Person',
      name: DATA.personal.name,
      url: SITE_URL,
    },
    keywords: project.tags.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
  );
};
