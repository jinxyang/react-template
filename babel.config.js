const path = require('path')

const resolvePath = (target) => path.resolve(__dirname, target)

module.exports = (api) => {
  api.cache(true)

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/react',
  ]
  const plugins = [
    ['@babel/proposal-pipeline-operator', { proposal: 'fsharp' }],
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@jinxyang/react-lib': resolvePath('packages/react-lib/src'),
        },
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
