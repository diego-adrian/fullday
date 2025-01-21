import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'fullday',
      fileName: (format, entryName) => `my-lib-${entryName}.${format}.js`,
      formats: ['es', 'cjs', 'umd'] 
    },
    rollupOptions: {
      external: ['dayjs'],
      output: {
        globals: {
          dayjs: 'dayjs'
        }
      }
    }
  },
})