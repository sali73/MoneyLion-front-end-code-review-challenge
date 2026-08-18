import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    server: {
      deps: {
        inline: true, // 100% Fix: Forces Vitest to compile all node_modules packages
      },
    },
  },
});
