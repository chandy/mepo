import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Route = createFileRoute('/notes')({
  component: NotesPage,
})

function NotesPage() {
  return (
    <>
      <PageHeader
        title="Notes"
        description="Placeholder for personal notes."
      />
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>No notes yet</CardTitle>
          <CardDescription>
            This route is a stub so the nav has somewhere to go.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Notes will live here later.
        </CardContent>
      </Card>
    </>
  )
}
