/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    // removeConsole: {
    //   exclude: ["error"],
    // },
  },
  // reactStrictMode: false,
};

module.exports = nextConfig;
