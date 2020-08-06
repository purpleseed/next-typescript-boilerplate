module.exports = function (api) {
  api.cache(true)

  const plugins = [
    'emotion',
    [
      'module-resolver',
      {
        root: [process.cwd()],
        alias: {
          '@*': ['@*'],
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
  ]
  const presets = ['next/babel', '@emotion/babel-preset-css-prop']

  return { plugins, presets }
}
