import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createProxyMiddleware } from "http-proxy-middleware";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "vitepress-proxy",
      configureServer(server) {
        const proxy = createProxyMiddleware({
          target: "http://127.0.0.1:5000",
          changeOrigin: true,
          ws: true,
          logLevel: "silent",
          // 🚫 don't rewrite anything, because VitePress expects /blog/
        });

        // ✅ use cast to any to fix TS + connect type mismatch
        (server.middlewares as any).use("/blog", proxy);
      },
    },
  ],
  server: {
    port: 3000,
  },
});
