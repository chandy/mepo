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

export const Route = createFileRoute('/settings')({
  component: SettingsPage,
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
  row: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.15rem',
  },
  value: {
    fontSize: '0.875rem',
    fontWeight: 500,
    textAlign: 'right',
    flexShrink: 0,
  },
})

const profileRows = [
  {
    label: 'Display name',
    hint: 'Shown in the sidebar and shared notes.',
    value: 'Chris',
  },
  {
    label: 'Email',
    hint: 'Used for digests and account recovery.',
    value: 'chris@example.com',
  },
]

const preferenceRows = [
  {
    label: 'Default landing page',
    hint: 'Where mepo opens after sign-in.',
    value: 'Home',
  },
  {
    label: 'Week starts on',
    hint: 'Affects calendars and weekly digests.',
    value: 'Monday',
  },
  {
    label: 'Email digest',
    hint: 'Summary of open inbox items.',
    value: 'Weekdays, 8 AM',
  },
]

function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Preferences for this workspace."
      />
      <div {...stylex.props(styles.stack)}>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>How you appear in mepo.</CardDescription>
          </CardHeader>
          <CardContent>
            <SettingsRows rows={profileRows} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Defaults for day-to-day use.</CardDescription>
          </CardHeader>
          <CardContent>
            <SettingsRows rows={preferenceRows} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

function SettingsRows({
  rows,
}: {
  rows: Array<{ label: string; hint: string; value: string }>
}) {
  return (
    <div {...stylex.props(styles.list)}>
      {rows.map((row, index) => (
        <div key={row.label}>
          {index > 0 ? <Separator className="mb-3" /> : null}
          <div {...stylex.props(styles.row)}>
            <div {...stylex.props(styles.label)}>
              <span className="font-medium">{row.label}</span>
              <span className="text-sm text-muted-foreground">{row.hint}</span>
            </div>
            <span {...stylex.props(styles.value)}>{row.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
