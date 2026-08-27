import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Route = createFileRoute('/inbox')({
  component: InboxPage,
})

function InboxPage() {
  return (
    <>
      <PageHeader
        title="Inbox"
        description="Placeholder for incoming items."
      />
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Nothing here yet</CardTitle>
          <CardDescription>
            This route is a stub so the nav has somewhere to go.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Inbox content will land here later.
        </CardContent>
      </Card>
    </>
  )
}
