import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative paths so the site works when hosted from a subpath (e.g. GitHub Pages)
  base: "./",
  plugins: [react()],
});
