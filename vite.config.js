import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function vendorChunk(id) {
  if (!id.includes('node_modules')) return undefined

  if (id.includes('framer-motion')) return 'motion'
  if (
    id.includes('react-markdown') ||
    id.includes('remark-') ||
    id.includes('micromark') ||
    id.includes('mdast-') ||
    id.includes('hast-') ||
    id.includes('unist-')
  ) {
    return 'markdown'
  }
  if (id.includes('react-router') || id.includes('@remix-run/router')) return 'router'
  if (id.includes('react-dom') || id.includes('/react/') || id.includes('scheduler')) {
    return 'react-vendor'
  }

  return undefined
}

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: vendorChunk,
      },
    },
  },
})
