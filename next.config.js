/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: [process.env.IMAGES_DOMAIN],
    path: '/_next/image', 
    loader: 'default',
  },

  env: {
    STRAPI_API: "https://ecf-charles.herokuapp.com/",
    API_URL : "https://ecf-charles.herokuapp.com/",
    IMAGES_DOMAIN : "localhost"
  }
}

module.exports = nextConfig

