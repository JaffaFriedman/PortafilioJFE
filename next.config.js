/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'portfolio-demo-g1q6mr7h6-jonadrar.vercel.app',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
