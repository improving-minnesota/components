import babel from 'rollup-plugin-babel';
import resolve from "rollup-plugin-node-resolve";
import uglify from 'rollup-plugin-uglify';

const input = 'src/index.js';
const output = {
  file: 'dist/components.js',
  format: 'umd',
  globals: {
    react: 'React',
    emotion: 'Emotion',
    'react-emotion': 'ReactEmotion',
    'prop-types': 'PropTypes'
  },
  name: 'OpiComponents',
  sourcemap: true
};

const plugins = [
  babel(),
  resolve()
];

const external = ['react', 'emotion', 'react-emotion', 'prop-types'];

export default [
  {
    input,
    output
  },
  {
    input,
    output: Object.assign({}, output, {
      file: 'dist/components-es.js',
      format: 'es'
    })
  }
]
  .map(config => Object.assign(config, { external, plugins }))
  .reduce((merged, config) => {
    return merged.concat([
      config,
      Object.assign({}, config, {
        output: Object.assign({}, config.output, {
          file: config.output.file.replace(/\.js$/, '.min.js')
        }),
        plugins: config.plugins.concat(uglify())
      })
    ]);
  }, []);
