import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      // 여러 HTML 파일을 함께 빌드해서 dist에 모두 포함
      input: {
        main: 'index.html',   // 루트(/)
        stage0: 'stage0.html',
        stage1: 'stage1.html',
        stage2: 'stage2.html',
        stage3: 'stage3.html',
        ending: 'ending.html',
      },
    }
  }
})

