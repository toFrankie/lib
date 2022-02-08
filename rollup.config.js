const { babel } = require('@rollup/plugin-babel')

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'es',
      file: 'dist/bundle.es.js'
    },
    {
      format: 'umd',
      name: 'MyBundle',
      file: 'dist/bundle.umd.js'
    },
    {
      format: 'cjs',
      file: 'dist/bundle.cjs.js'
    }
  ],
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    })
  ]
}
