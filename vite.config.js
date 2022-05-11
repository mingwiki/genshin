import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://zed.ink/genshin/",
  plugins: [
    react(),
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true,
      },
    }),
  ],
});
