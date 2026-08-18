import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Love Ghariwala - Full Stack Developer Portfolio',
    short_name: 'Love Ghariwala',
    description:
      'High-end personal portfolio of Love Ghariwala, focusing on Next.js, React, TypeScript, FastAPI, and scalable architectures.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060212',
    theme_color: '#ff007f',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],

  };
}
