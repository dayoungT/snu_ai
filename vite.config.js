import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      // 배포 루트(/)는 index.html을 사용하고, index.html에서 stage0.html로 리다이렉트
      input: 'index.html'
    }
  }
})

