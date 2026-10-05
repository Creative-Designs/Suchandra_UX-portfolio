import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Defaults to root-relative paths, which works for the v0 preview, Vercel,
  // and most hosts. If deploying to GitHub Pages under a repo subpath
  // (username.github.io/repo-name), set this to "/repo-name/" instead.
  base: "/",
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
})
