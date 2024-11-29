'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (window.location.pathname === '/') {
      router.push('/dashboard');
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
