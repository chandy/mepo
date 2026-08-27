import { createFileRoute } from '@tanstack/react-router'
import { corsPreflight, json } from '@/lib/http'

export const Route = createFileRoute('/api/health')({
  server: {
    handlers: {
      OPTIONS: () => corsPreflight(),
      GET: () =>
        json({
          ok: true,
          service: 'mepo',
        }),
    },
  },
})
