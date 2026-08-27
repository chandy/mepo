import type { ReactNode } from 'react'
import * as stylex from '@stylexjs/stylex'
import { AppSidebar } from '@/components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { colors, layout } from '@/styles/tokens.stylex'

const styles = stylex.create({
  inset: {
    backgroundColor: colors.background,
    color: colors.foreground,
    minHeight: '100svh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    height: layout.headerHeight,
    paddingInline: '1rem',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  content: {
    padding: '1.5rem',
  },
})

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset {...stylex.props(styles.inset)}>
          <header {...stylex.props(styles.header)}>
            <SidebarTrigger />
            <span {...stylex.props(styles.title)}>mepo</span>
          </header>
          <div {...stylex.props(styles.content)}>{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
