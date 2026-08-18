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
  const imageUrl = project.image ? `${SITE_URL}${project.image}` : undefined;

  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
    keywords: [project.title, ...project.tags, "Love Ghariwala", "Case Study", "Web Development"],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Love Ghariwala`,
      description: project.description,
      url: pageUrl,
      type: 'article',
      siteName: 'Love Ghariwala Portfolio',
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: `${project.title} screenshot`,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Love Ghariwala`,
      description: project.description,
      images: imageUrl ? [imageUrl] : [],
      creator: '@loveghariwala',
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

