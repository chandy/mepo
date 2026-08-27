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

export const Route = createFileRoute('/inbox')({
  component: InboxPage,
})

const styles = stylex.create({
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '42rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  meta: {
    fontSize: '0.75rem',
    color: 'var(--muted-foreground)',
  },
})

const inboxItems = [
  {
    from: 'Maya Chen',
    subject: 'Backsplash sample arrived',
    preview: 'The matte white looks better in person — want me to leave it on the counter?',
    when: '9:14 AM',
  },
  {
    from: 'Alex Rivera',
    subject: 'Saturday hike',
    preview: 'Weather looks clear. Meet at the trailhead or carpool from your place?',
    when: 'Yesterday',
  },
  {
    from: 'City Permits',
    subject: 'Parking renewal due',
    preview: 'Zone R permit expires Friday. Renew online to keep the current sticker.',
    when: 'Tue',
  },
  {
    from: 'Jordan Lee',
    subject: 'Dinner next week',
    preview: 'Thursday still free on my end. Thai place on 14th or the new wine bar?',
    when: 'Mon',
  },
]

function InboxPage() {
  return (
    <>
      <PageHeader
        title="Inbox"
        description="Things waiting for a decision or reply."
      />
      <div {...stylex.props(styles.stack)}>
        <Card>
          <CardHeader>
            <CardTitle>Open</CardTitle>
            <CardDescription>{inboxItems.length} items · newest first</CardDescription>
          </CardHeader>
          <CardContent>
            <div {...stylex.props(styles.list)}>
              {inboxItems.map((item, index) => (
                <div key={item.subject}>
                  {index > 0 ? <Separator className="mb-3" /> : null}
                  <div {...stylex.props(styles.item)}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-medium">{item.subject}</span>
                      <span {...stylex.props(styles.meta)}>{item.when}</span>
                    </div>
                    <span {...stylex.props(styles.meta)}>{item.from}</span>
                    <p className="text-sm text-muted-foreground">{item.preview}</p>
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
