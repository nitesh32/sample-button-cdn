import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/components", "src/index.ts"],
      rollupTypes: true,
    }),
    visualizer(), // Creates a visualization of your bundle
  ],
  build: {
    lib: {
      // Define the entry point
      entry: resolve(__dirname, "src/index.ts"),
      // Name of the library
      name: "CdnButton",
      // File name format
      fileName: (format) => `cdn-button.${format}.js`,
      // Build for multiple formats
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      // Make React external so it's not bundled with your component
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Global variable names for external libraries
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        // Extract CSS to a separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "cdn-button.css";
          return assetInfo.name;
        },
      },
    },
    // Generate sourcemaps for easier debugging
    sourcemap: true,
    // Keep CSS as a single file
    cssCodeSplit: false,
  },
});
