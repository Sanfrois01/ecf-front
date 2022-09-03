/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  
  images: {
    domains: [process.env.IMAGES_DOMAIN],
    path: '/_next/image', 
    loader: 'default',
  },

  env: {
    STRAPI_API: "https://strapi-h0dw.onrender.com/",
    API_URL : "https://strapi-h0dw.onrender.com/",
    IMAGES_DOMAIN : "localhost"
  }
}

module.exports = nextConfig

