import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA()
  ],
  resolve: {
		alias: {
			'@': '/src'
		}
	},
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: "@import '@/style/common.scss';"
      }
    }
  },
})
