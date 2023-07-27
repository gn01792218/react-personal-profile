import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports:['react', 'react-router-dom'],
      dts:'src/auto-imports.d.ts'
    }),
    viteCompression({
        algorithm:'gzip',
        threshold:10240,  //文件大於多少b才壓縮( 10240b即10kb )
        deleteOriginFile:false, //是否要壓縮完後刪除原檔案
    }),
    viteImagemin()
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
