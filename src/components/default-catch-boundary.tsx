import { ErrorComponent, Link, useRouter } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()

  console.error(error)

  return (
    <div className="flex min-h-[50vh] flex-col items-start gap-4 p-6">
      <ErrorComponent error={error} />
      <div className="flex gap-2">
        <Button type="button" onClick={() => router.invalidate()}>
          Try again
        </Button>
        <Button variant="outline" nativeButton={false} render={<Link to="/" />}>
          Home
        </Button>
      </div>
    </div>
  )
}
