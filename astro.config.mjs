import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"]
    },
    resolve: {
      alias: {
        '$': path.resolve(__dirname, './src')
      }
    }
  },
  integrations: [
    tailwind()
  ]
})
