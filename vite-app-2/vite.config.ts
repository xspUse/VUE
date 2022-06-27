import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
// vite 版本 unplugin-auto-import/vite
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx(),AutoImport({
    // 注入项
    imports: ['vue'],
    // 声明文件放置位置
    dts:'src/auto-import.d.ts'
  })]
})
