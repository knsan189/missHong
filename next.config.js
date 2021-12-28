/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/openapi/:path*",
        destination: "http://api.visitkorea.or.kr/openapi/:path*",
      },
      {
        source: "/openapi/:path*/",
        destination: "http://api.visitkorea.or.kr/openapi/:path*/",
      },
    ];
  },
};
