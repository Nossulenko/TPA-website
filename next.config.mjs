import { config } from "dotenv";

config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "cms.productarchitects.eu"],
  },
};
export default nextConfig;
