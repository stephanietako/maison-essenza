/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["pages", "components", "lib"], // Définir les répertoires à linter
  },
};

export default nextConfig;
