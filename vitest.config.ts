import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['app/**/*.{js,ts}'],
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'), // ~/ を app ディレクトリに解決
    },
  },
})
