import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Route = createFileRoute('/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Placeholder for app preferences."
      />
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Settings coming later</CardTitle>
          <CardDescription>
            This route is a stub so the nav has somewhere to go.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Profile, theme, and other preferences will show up here.
        </CardContent>
      </Card>
    </>
  )
}
