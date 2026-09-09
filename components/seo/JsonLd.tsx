import { DATA } from '@/constants/data';
import { SITE_URL } from '@/constants/metadata';

export const RootJsonLd = () => {
  const allSkills = DATA.skills.flatMap((s) => s.items);

  const rootGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Organization Schema
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Love Ghariwala Development',
        alternateName: ['Love Ghariwala Studio', 'Love Ghariwala Freelance'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/logo.png`,
          contentUrl: `${SITE_URL}/logo.png`,
          caption: 'Love Ghariwala Logo',
          width: 512,
          height: 512,
        },
        image: {
          '@id': `${SITE_URL}/#logo`,
        },
        founder: {
          '@id': `${SITE_URL}/#person`,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'technical support and business inquiries',
            telephone: DATA.personal.phone,
            email: DATA.personal.email,
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Hindi', 'Gujarati'],
          },
        ],
        sameAs: DATA.social.map((s) => s.url),
      },

      // 2. Person Schema
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: DATA.personal.name,
        givenName: 'Love',
        familyName: 'Ghariwala',
        jobTitle: DATA.personal.role,
        description: DATA.personal.bio,
        url: SITE_URL,
        image: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#personImage`,
          url: `${SITE_URL}${DATA.personal.avatar}`,
          caption: DATA.personal.name,
        },
        email: `mailto:${DATA.personal.email}`,
        telephone: DATA.personal.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Surat',
          addressRegion: 'Gujarat',
          addressCountry: 'India',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: DATA.education[0]?.institution || 'Parul Institute of Technology',
        },
        worksFor: {
          '@id': `${SITE_URL}/#organization`,
        },
        sameAs: DATA.social.map((s) => s.url),
        knowsAbout: allSkills,
      },

      // 3. WebSite Schema
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Love Ghariwala Portfolio',
        alternateName: 'Love Ghariwala — Full Stack Developer & Next.js Specialist',
        description:
          'Official portfolio of Love Ghariwala - Full Stack Developer specializing in Next.js 16, React, TypeScript, Node.js, and FastAPI.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        author: {
          '@id': `${SITE_URL}/#person`,
        },
        inLanguage: 'en-US',
      },

      // 4. ProfilePage Schema
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: 'Love Ghariwala — Full Stack Developer & Next.js Specialist',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@id': `${SITE_URL}/#person`,
        },
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
        breadcrumb: {
          '@id': `${SITE_URL}/#breadcrumb`,
        },
      },

      // 5. BreadcrumbList Schema (Root)
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraph) }}
    />
  );
};

interface ProjectJsonLdProps {
  project: (typeof DATA.projects)[number];
}

export const ProjectJsonLd = ({ project }: ProjectJsonLdProps) => {
  const pageUrl = `${SITE_URL}/projects/${project.slug}`;
  const imageUrl = project.image ? `${SITE_URL}${project.image}` : `${SITE_URL}/og-image.png`;

  const projectGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${SITE_URL}/#projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: pageUrl,
          },
        ],
      },

      // 2. SoftwareApplication Schema
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#software`,
        name: project.title,
        headline: `${project.title} — Software Architecture Case Study`,
        description: project.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web Browser, iOS, Android, macOS, Windows, Linux',
        url: pageUrl,
        image: imageUrl,
        author: {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: DATA.personal.name,
          url: SITE_URL,
        },
        creator: {
          '@id': `${SITE_URL}/#person`,
        },
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        keywords: project.tags.join(', '),
      },

      // 3. TechArticle / WebPage Schema
      {
        '@type': 'TechArticle',
        '@id': `${pageUrl}#article`,
        url: pageUrl,
        headline: `${project.title} — Technical Case Study & Architecture`,
        description: project.description,
        image: imageUrl,
        author: {
          '@id': `${SITE_URL}/#person`,
        },
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en-US',
        mainEntityOfPage: pageUrl,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        about: {
          '@id': `${pageUrl}#software`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectGraph) }}
    />
  );
};
