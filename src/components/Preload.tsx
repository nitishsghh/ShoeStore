'use client';

export default function Preload() {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/fonts/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical images */}
      <link
        rel="preload"
        href="/shoe-icon.svg"
        as="image"
        type="image/svg+xml"
      />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Meta tags for performance */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </>
  );
} 