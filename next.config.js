module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/searchFestival/:path*",
        destination:
          "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival/:path*",
      },
    ];
  },
};
