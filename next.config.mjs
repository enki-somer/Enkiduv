/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/Enkiduv" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Enkiduv/" : "",
  trailingSlash: true,
};

export default nextConfig;
