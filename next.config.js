module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://pf-agri.webflow.io',
      },
      {
        source: '/:slug',
        destination: 'https://pf-agri.webflow.io/:slug',
      },
    ]
  },
}
