import type { Options } from 'tsdown'

const config: Options = {
  format: ['esm', 'cjs', 'iife'],
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  outDir: './dist',
}

export default config
