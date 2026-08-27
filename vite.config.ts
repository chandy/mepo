import path from 'node:path'
import { cloudflare } from '@cloudflare/vite-plugin'
import stylex from '@stylexjs/unplugin'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    resolve: {
      tsconfigPaths: true,
      alias: {
        '@': path.join(import.meta.dirname, 'src'),
      },
    },
    plugins: [
      stylex.vite({
        useCSSLayers: {
          before: ['theme', 'base', 'components'],
          after: ['utilities'],
          prefix: 'stylex',
        },
        dev: isDev,
        runtimeInjection: false,
        devPersistToDisk: true,
        aliases: {
          '@/*': path.join(import.meta.dirname, './src/*'),
        },
      }),
      tailwindcss(),
      cloudflare({ viteEnvironment: { name: 'ssr' } }),
      tanstackStart(),
      viteReact(),
    ],
  }
})
