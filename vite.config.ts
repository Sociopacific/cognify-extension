import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.tsx"),
        content: resolve(__dirname, "content.js"),
        background: resolve(__dirname, "background.js"),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === "main") {
            return "bundle.js";
          }
          return "[name].js";
        },
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
