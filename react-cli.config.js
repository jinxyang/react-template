module.exports = {
  port: 4000,
  proxy: [
    {
      path: '/',
      options: {
        target: 'http://192.168.124.43:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/', // remove base path
        },
      },
    },
  ],
  splitChunks: {
    cacheGroups: {
      react: {
        name: 'react',
        priority: 10,
        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
      },
      antd: {
        name: 'antd',
        priority: 10,
        test: /[\\/]node_modules[\\/](antd|@antd-)/,
      },
    },
  },
}
