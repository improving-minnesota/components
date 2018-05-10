const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    [
      'babel-preset-env',
      {
        modules: false,
        targets: {
          browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
        }
      }
    ],
    'babel-preset-react'
  ],
  plugins: ['babel-plugin-transform-object-rest-spread'].concat(PROD ? [
    'babel-plugin-external-helpers',
    'babel-plugin-transform-react-remove-prop-types'
  ] : [])
};
