import { sveltekit } from '@sveltejs/kit/vite';
import basicSSL from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), basicSSL()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    sourcemap: true,
  },
});
