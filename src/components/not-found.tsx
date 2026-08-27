import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function NotFound({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-start gap-4 p-6">
      <h1 className="text-2xl font-semibold tracking-tight">Not found</h1>
      <p className="text-muted-foreground">
        {children ?? 'The page you are looking for does not exist.'}
      </p>
      <Button nativeButton={false} render={<Link to="/" />}>
        Back home
      </Button>
    </div>
  )
}
