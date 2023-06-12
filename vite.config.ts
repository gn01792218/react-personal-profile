import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports:['react', 'react-router-dom'],
      dts:'src/auto-imports.d.ts'
    })
  ],
  define:{
    'process.env':{}
  },
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
    }
  },
  base:'/react-personal-profile/'
})
