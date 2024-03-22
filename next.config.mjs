import { config } from "dotenv";

config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }, { hostname: "cms.productarchitects.eu" }],
  },
};
export default nextConfig;
