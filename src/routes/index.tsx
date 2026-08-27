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
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const styles = stylex.create({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '42rem',
  },
  grid: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: {
      default: '1fr',
      '@media (min-width: 640px)': '1fr 1fr',
    },
  },
  meta: {
    fontSize: '0.75rem',
    color: 'var(--muted-foreground)',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
})

const focus = {
  title: 'Ship the kitchen reno punch list',
  detail: 'Confirm tile delivery window, then ping Maya about the backsplash sample.',
}

const glance = [
  { label: 'Inbox', value: '4 waiting' },
  { label: 'Notes', value: '3 recent' },
]

const recent = [
  {
    title: 'Reply drafted to Alex',
    detail: 'Saturday hike — yes, leave by 8:15.',
    when: 'Yesterday',
  },
  {
    title: 'Note updated',
    detail: 'Weekend packing — boots, rain shell, trail snacks.',
    when: 'Tue',
  },
  {
    title: 'Reminder cleared',
    detail: 'Renew parking permit before Friday.',
    when: 'Mon',
  },
]

function HomePage() {
  return (
    <>
      <PageHeader
        title="Home"
        description="Thursday overview — what's open and what's next."
      />
      <div {...stylex.props(styles.stack)}>
        <Card>
          <CardHeader>
            <CardTitle>Today</CardTitle>
            <CardDescription>{focus.title}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {focus.detail}
          </CardContent>
        </Card>

        <div {...stylex.props(styles.grid)}>
          {glance.map((item) => (
            <Card key={item.label} size="sm">
              <CardHeader>
                <CardDescription>{item.label}</CardDescription>
                <CardTitle>{item.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent</CardTitle>
            <CardDescription>Activity from the last few days.</CardDescription>
          </CardHeader>
          <CardContent>
            <div {...stylex.props(styles.list)}>
              {recent.map((item, index) => (
                <div key={item.title}>
                  {index > 0 ? <Separator className="mb-3" /> : null}
                  <div {...stylex.props(styles.item)}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-medium">{item.title}</span>
                      <span {...stylex.props(styles.meta)}>{item.when}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
