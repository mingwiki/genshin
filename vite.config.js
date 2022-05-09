import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://zed.ink/genshin/",
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        "./favicon.svg",
        "./favicon.ico",
        "./robots.txt",
        "./apple-touch-icon.png",
      ],
      manifest: {
        name: "原神助手",
        short_name: "原神助手",
        description: "原神小工具",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
