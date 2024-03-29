import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      format: 'cjs', // 打包为commonjs格式
      file: 'dist/index.cjs.js', // 打包后的文件路径名称
    },
    {
      format: 'esm', // 打包为esm格式
      file: 'dist/index.esm.js',
    },
    {
      format: 'umd', // 打包为umd通用格式
      file: 'dist/index.umd.js',
      minifyInternalExports: true
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}
