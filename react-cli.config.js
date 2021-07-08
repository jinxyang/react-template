module.exports = {
  port: 4000,
  proxy: [],
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
