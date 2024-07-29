/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      port: "",
      hostname: "**",
      pathname: "/**",
    }]
  },
};

export default nextConfig;
