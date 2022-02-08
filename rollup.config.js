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
  ]
}
