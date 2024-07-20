import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path'; // path modülünü import ediyoruz

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: path.resolve('public/sowhat.com-key.pem'), // SSL anahtar dosyasının yolu
      cert: path.resolve('public/sowhat.com.pem'),    // SSL sertifika dosyasının yolu
    },
  },
});
