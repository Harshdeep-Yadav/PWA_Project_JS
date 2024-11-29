// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',          // Output directory for the service worker
  register: true,          // Automatically register the service worker
  skipWaiting: true,       // Activate updated service worker immediately
  // disable: process.env.NODE_ENV === 'development', // Disable PWA during development
});

module.exports = withPWA({
  reactStrictMode: true,
  // Other Next.js configurations
});
