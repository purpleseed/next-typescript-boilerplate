const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['next/babel', '@emotion/babel-preset-css-prop'],
      plugins: [
        'emotion',
        [
          'module-resolver',
          {
            root: [process.cwd()],
            alias: {
              '@*': ['*'],
            }
          }
        ],
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true
          }
        ],
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true
          }
        ],
      ],
    },
  })

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./'),
  ];

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
