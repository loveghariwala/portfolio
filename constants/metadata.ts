import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    template: '%s | Alex Rivera Portfolio',
    default: 'Alex Rivera - Senior Full Stack Developer',
  },
  description: 'High-end personal portfolio of Alex Rivera, focusing on premium UI/UX, performance, and scalability.',
  keywords: ['Portfolio', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Full Stack Developer'],
  authors: [{ name: 'Alex Rivera' }],
  openGraph: {
    title: 'Alex Rivera - Senior Full Stack Developer',
    description: 'High-end personal portfolio of Alex Rivera.',
    url: 'https://alexrivera.dev',
    siteName: 'Alex Rivera Portfolio',
    images: [
      {
        url: 'https://alexrivera.dev/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Rivera - Senior Full Stack Developer',
    description: 'High-end personal portfolio of Alex Rivera.',
    creator: '@alexrivera',
    images: ['https://alexrivera.dev/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
