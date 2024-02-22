import { config } from "dotenv";

config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};
export default nextConfig;
