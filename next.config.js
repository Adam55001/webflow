module.exports = {
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: 'https://pf-agri.webflow.io/:slug',
      },
    ]
  },
}
