import * as stylex from '@stylexjs/stylex'

export const colors = stylex.defineVars({
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  muted: 'var(--muted)',
  mutedForeground: 'var(--muted-foreground)',
  border: 'var(--border)',
  accent: 'var(--accent)',
  accentForeground: 'var(--accent-foreground)',
  card: 'var(--card)',
  cardForeground: 'var(--card-foreground)',
  sidebar: 'var(--sidebar)',
  sidebarForeground: 'var(--sidebar-foreground)',
  sidebarAccent: 'var(--sidebar-accent)',
  sidebarAccentForeground: 'var(--sidebar-accent-foreground)',
  sidebarBorder: 'var(--sidebar-border)',
  sidebarPrimary: 'var(--sidebar-primary)',
  sidebarPrimaryForeground: 'var(--sidebar-primary-foreground)',
})

export const layout = stylex.defineVars({
  navWidth: '16rem',
  headerHeight: '3.5rem',
})
