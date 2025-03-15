import { defineConfig } from "vite";
import { resolve } from "node:path";

const config = defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        project: resolve(__dirname, "project.html"),
        product: resolve(__dirname, "product.html"),
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});

export default config;
