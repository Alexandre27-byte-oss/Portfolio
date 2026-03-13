import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT GitHub Pages:
// - Si tu déploies sur https://<user>.github.io/<repo>/
//   remplace base par "/<repo>/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
