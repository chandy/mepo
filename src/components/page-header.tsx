import * as stylex from '@stylexjs/stylex'
import { colors } from '@/styles/tokens.stylex'

const styles = stylex.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: {
      default: '1.75rem',
      '@media (min-width: 768px)': '1.5rem',
    },
    fontWeight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    color: colors.foreground,
  },
  description: {
    fontSize: {
      default: '1.0625rem',
      '@media (min-width: 768px)': '0.95rem',
    },
    lineHeight: 1.5,
    color: colors.mutedForeground,
  },
})

export function PageHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <header {...stylex.props(styles.header)}>
      <h1 {...stylex.props(styles.title)}>{title}</h1>
      <p {...stylex.props(styles.description)}>{description}</p>
    </header>
  )
}
