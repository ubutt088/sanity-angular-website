const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://5ncqy6jw.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;