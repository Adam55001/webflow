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
        destination: 'https://rk-shop.webflow.io/:slug',
      },
    ]
  },
}
