import { resolve } from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      vue: resolve(__dirname, "../dist/vue.runtime.esm.js"),
    },
  },
});
