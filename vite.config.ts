import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { ViteDevServer } from 'vite';
import { createServer } from 'http';


const SERVER_URL = 'https://django-api-824k.onrender.com/';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://django-api-824k.onrender.com/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})














// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '^/api/.*': {
//         target: SERVER_URL,
//         changeOrigin: false,
//         rewrite: path => path.replace('/api', ''),
//         headers: {
//           'HOST': 'djangoapi-production-7681.up.railway.app'
//         },
//       }
//     }
//   }
// });
