import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      sassVariables: fileURLToPath(
        new URL("./src/assets/style/quasar-variables.sass", import.meta.url),
      ),
    }),
  ],
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: {
      port: 3000,
    },
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    minify: "terser",
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_OPTIONS_API__: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
