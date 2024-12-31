import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        // Optional: Add any SVGR options here
        icon: true,
      },
    }),
  ],
});
