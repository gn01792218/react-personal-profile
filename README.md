# react+ts+tailwindCss 樣板
## 讓專案擁有自動import 功能
```javascript
npm i -D unplugin-auto-import

//vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports:['react', 'react-router-dom'],
      dts:'src/auto-imports.d.ts'
    })
  ],
})
```
## 添加Project的filter選項
只需要到Types資料夾下的project.ts檔案中，增加enum就可以囉~!
