import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

// Copy Google Search Console verification file to dist after build
const copyVerificationFile = () => {
  return {
    name: 'copy-verification-file',
    closeBundle() {
      copyFileSync(
        resolve(__dirname, 'google54ec7e1acefdca09.html'),
        resolve(__dirname, 'dist/google54ec7e1acefdca09.html')
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), copyVerificationFile()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
