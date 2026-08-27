import {
  HomeIcon,
  InboxIcon,
  SettingsIcon,
  StickyNoteIcon,
} from 'lucide-react'

export const navItems = [
  { title: 'Home', to: '/', icon: HomeIcon },
  { title: 'Inbox', to: '/inbox', icon: InboxIcon },
  { title: 'Notes', to: '/notes', icon: StickyNoteIcon },
  { title: 'Settings', to: '/settings', icon: SettingsIcon },
] as const
