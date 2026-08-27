import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <PageHeader
        title="Home"
        description="A personal app shell with a left nav. Pages are placeholders for now."
      />
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Welcome to mepo</CardTitle>
          <CardDescription>
            TanStack Start on Cloudflare, with StyleX for app layout and shadcn
            for UI primitives.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Use the left nav to move between Home, Inbox, Notes, and Settings.
        </CardContent>
      </Card>
    </>
  )
}
