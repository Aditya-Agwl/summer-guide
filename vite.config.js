import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'summer-guide-CQ-Assocs'

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`, // important for GitHub Pages subpath
  plugins: [react()]
})
