import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    template: '%s | Love Ghariwala Portfolio',
    default: 'Love Ghariwala -  Full Stack Developer',
  },
  description: 'High-end personal portfolio of Love Ghariwala, focusing on premium UI/UX, performance, and scalability.',
  keywords: ['Portfolio', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Full Stack Developer'],
  authors: [{ name: 'Love Ghariwala' }],
  openGraph: {
    title: 'Love Ghariwala -  Full Stack Developer',
    description: 'High-end personal portfolio of Love Ghariwala.',
    url: 'https://Love Ghariwala.dev',
    siteName: 'Love Ghariwala Portfolio',
    images: [
      {
        url: 'https://Love Ghariwala.dev/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Ghariwala - Senior Full Stack Developer',
    description: 'High-end personal portfolio of Love Ghariwala.',
    creator: '@Love Ghariwala',
    images: ['https://Love Ghariwala.dev/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
