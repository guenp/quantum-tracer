const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  assetPrefix: isProd ? '/quantum-tracer/' : '',
  basePath: isProd ? '/quantum-tracer': '',
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};
