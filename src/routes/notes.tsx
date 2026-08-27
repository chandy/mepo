import { createFileRoute } from '@tanstack/react-router'
import * as stylex from '@stylexjs/stylex'
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

const styles = stylex.create({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '42rem',
  },
})

const notes = [
  {
    title: 'Weekend packing',
    updated: 'Tue · 2 min read',
    body: 'Boots, rain shell, spare socks. Trail snacks in the blue cooler. Charge the headlamp Thursday night.',
  },
  {
    title: 'Kitchen reno punch list',
    updated: 'Mon · 4 min read',
    body: 'Confirm tile delivery window. Measure the island overhang again before ordering stools. Ask Maya about under-cabinet lighting.',
  },
  {
    title: 'Books to pick up',
    updated: 'Last week · 1 min read',
    body: 'Library hold: The Living Mountain. Bookstore: that essay collection Jordan mentioned.',
  },
]

function NotesPage() {
  return (
    <>
      <PageHeader
        title="Notes"
        description="Scratchpad and longer thoughts."
      />
      <div {...stylex.props(styles.stack)}>
        {notes.map((note) => (
          <Card key={note.title}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
              <CardDescription>{note.updated}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {note.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
