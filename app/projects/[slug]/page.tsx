import { DATA } from "@/constants/data";
import { SITE_URL } from "@/constants/metadata";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { ProjectJsonLd } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = DATA.projects.find((p) => p.slug === slug);
  
  if (!project) return {};

  const pageUrl = `${SITE_URL}/projects/${project.slug}`;
  const bannerImage = project.image ? `${SITE_URL}${project.image}` : `${SITE_URL}/og-image.png`;
  const seoDescription = `${project.title} architectural case study by Full Stack Developer Love Ghariwala. Built with ${project.tags.slice(0, 4).join(', ')}.`;

  return {
    title: `${project.title} — Case Study & Architecture`,
    description: seoDescription,
    keywords: [
      project.title,
      ...project.tags,
      'Love Ghariwala',
      'Full Stack Developer',
      'Software Architecture',
      'Next.js Case Study',
      'Web Application Engineering',
      'Production System Design',
    ],
    alternates: {
      canonical: `/projects/${project.slug}`,
      languages: {
        'en-US': `/projects/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.title} — Case Study & Architecture | Love Ghariwala`,
      description: seoDescription,
      url: pageUrl,
      type: 'article',
      siteName: 'Love Ghariwala Portfolio',
      locale: 'en_US',
      images: [
        {
          url: bannerImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Architecture Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study & Architecture | Love Ghariwala`,
      description: seoDescription,
      images: [bannerImage],
      creator: '@loveghariwala',
      site: '@loveghariwala',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectJsonLd project={project} />
      <ProjectDetail project={project} />
    </>
  );
}
