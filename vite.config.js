import { defineConfig } from 'vite';

// 가장 단순한 설정: 프로젝트 루트의 stage0.html을 진입점으로 사용
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'stage0.html',
    },
  },
});

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'stage0.html'
    }
  }
})

