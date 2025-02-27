import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'build', // Cambiar el directorio de salida a 'build'
  },
  server: {
    watch: {
      usePolling: true, // Useful for debugging in some environments
    },
  },
});
