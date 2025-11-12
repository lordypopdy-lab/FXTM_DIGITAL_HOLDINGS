import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import polyfillNode from "rollup-plugin-polyfill-node";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      process: "process/browser",
      buffer: "buffer",
    },
  },
  optimizeDeps: {
    include: ["buffer", "process"],
  },
  build: {
    rollupOptions: {
      plugins: [
        polyfillNode(), // polyfills Node built-ins like Buffer
      ],
    },
  },
});
