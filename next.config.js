module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/searchFestival/:path*",
        destination:
          "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival/:path*",
      },
      {
        source: "/PhotoService.GetPhoto/:path*",
        destination:
          "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto/:path*",
      },
    ];
  },
};
