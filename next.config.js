module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: 'https://client-first.webflow.io/:slug',
      },
    ]
  },
}
