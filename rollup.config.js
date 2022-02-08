import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
// import serve from 'rollup-plugin-serve'

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'es',
      file: 'dist/index.es.js'
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs.js'
    },
    {
      format: 'umd',
      file: 'dist/index.umd.js',
      name: 'bundle'
    }
  ],
  plugins: [
    terser(),

    babel({
      presets: ['@babel/preset-env']
    })

    // serve({
    //   open: true,
    //   port: 3000,
    //   contentBase: ['examples']
    // })
  ]
}
