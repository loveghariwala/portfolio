import { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://loveportfolio.vercel.app';

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Love Ghariwala - Full Stack Developer',
    default: 'Love Ghariwala - Full Stack Developer & Next.js Specialist',
  },
  description:
    'Full Stack Developer specializing in Next.js, React, TypeScript, FastAPI, and scalable cloud architectures. Explore production projects, interactive live demos, and technical case studies.',
  applicationName: 'Love Ghariwala Portfolio',
  authors: [{ name: 'Love Ghariwala', url: SITE_URL }],
  generator: 'Next.js',
  keywords: [
    'Love Ghariwala',
    'Full Stack Developer',
    'Next.js Developer',
    'React Specialist',
    'Frontend Developer India',
    'Backend Developer',
    'TypeScript',
    'Tailwind CSS',
    'FastAPI',
    'Qdrant Vector Search',
    'Web Developer Surat',
    'Software Engineer Portfolio',
    'UI UX Engineer',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Love Ghariwala',
  publisher: 'Love Ghariwala',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },


  openGraph: {
    title: 'Love Ghariwala - Full Stack Developer & Next.js Specialist',
    description:
      'High-performance web applications, clean architecture, vector search systems, and modern UI engineering by Love Ghariwala.',
    url: SITE_URL,
    siteName: 'Love Ghariwala Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Love Ghariwala - Full Stack Developer Portfolio Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Ghariwala - Full Stack Developer & Next.js Specialist',
    description:
      'High-performance web applications, clean architecture, and modern UI engineering by Love Ghariwala.',
    creator: '@loveghariwala',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};


