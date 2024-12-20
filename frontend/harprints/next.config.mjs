/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "private-avatars.githubusercontent.com",
    ], // Add allowed domains here
  },
};

export default nextConfig;
