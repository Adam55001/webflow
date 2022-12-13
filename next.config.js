module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://uv-app3.adam55002.repl.co',
      },
      {
        source: '/:slug',
        destination: 'https://pf-agri.webflow.io/:slug',
      },
    ]
  },
}
