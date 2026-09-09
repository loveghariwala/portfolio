import { Metadata } from 'next';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://lovable-teal-one.vercel.app';

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Love | Love Ghariwala — Full Stack Developer',
    default: 'Love | Love Ghariwala — Full Stack Developer & Next.js Specialist',
  },
  description:
    'Full Stack Developer specializing in Next.js 16, React, TypeScript, Node.js, and FastAPI. Building high-performance web applications and scalable backend systems.',
  applicationName: 'Love Ghariwala Portfolio',
  authors: [{ name: 'Love Ghariwala', url: SITE_URL }],
  generator: 'Next.js',
  verification: {
    google: 'Mhav1QLYFTNR1qdDN3bpzkf4s2uwDj0eatBRaX4q_bM',
  },
  keywords: [
    // High-Volume Easy Ranking Keywords
    'Love',
    'portfolio visualizer',
    'adobe portfolio',
    'portfolio recovery',
    'consumer portfolio services',
    'select portfolio servicing',
    'central portfolio control',
    'portfolio recovery associates',

    // Identity & Role
    'Love Ghariwala',
    'Love Ghariwala Portfolio',
    'Full Stack Developer',
    'Software Engineer',
    'Full Stack Software Engineer',
    'Web Developer',
    
    // Frontend Stack
    'Next.js Developer',
    'Next.js 16',
    'React Developer',
    'React 19',
    'TypeScript Developer',
    'Tailwind CSS',
    'Frontend Engineer',
    'UI UX Engineer',

    // Backend, APIs & Data
    'Node.js Developer',
    'FastAPI Developer',
    'Python Backend Developer',
    'PostgreSQL Developer',
    'Supabase Developer',
    'RESTful API Architecture',
    'Qdrant Vector Database',
    'Database Optimization',

    // Location & Hiring Intent
    'Full Stack Developer India',
    'Web Developer Surat',
    'Software Engineer Gujarat',
    'Hire Next.js Developer',
    'Freelance Full Stack Developer',
    'Software Engineering Case Studies',
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
    languages: {
      'en-US': '/',
    },
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
    title: 'Love | Love Ghariwala — Full Stack Developer & Next.js Specialist',
    description:
      'Full Stack Developer specializing in Next.js 16, React, TypeScript, Node.js, and FastAPI. Building high-performance web applications and scalable backend systems.',
    url: SITE_URL,
    siteName: 'Love Ghariwala Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Love Ghariwala — Full Stack Developer Portfolio Banner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love | Love Ghariwala — Full Stack Developer & Next.js Specialist',
    description:
      'Full Stack Developer specializing in Next.js 16, React, TypeScript, Node.js, and FastAPI. Building high-performance web applications and scalable backend systems.',
    creator: '@loveghariwala',
    site: '@loveghariwala',
    images: [
      {
        url: '/twitter-image.png',
        alt: 'Love Ghariwala — Full Stack Developer Portfolio Banner',
        width: 1200,
        height: 630,
      },
    ],
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
