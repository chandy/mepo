import { Link, useRouterState } from '@tanstack/react-router'
import { navItems } from '@/lib/nav'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'

const mobileNavButtonClassName =
  'h-12 text-base [&_svg]:size-5 md:h-8 md:text-sm md:[&_svg]:size-4'

export function AppSidebar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const { isMobile, setOpenMobile } = useSidebar()

  const closeMobileNav = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="h-14 text-base md:h-12 md:text-sm"
              render={<Link to="/" />}
              tooltip="mepo"
              onClick={closeMobileNav}
            >
              <span className="flex size-9 items-center justify-center rounded-md bg-sidebar-primary text-base font-semibold text-sidebar-primary-foreground md:size-8 md:text-sm">
                m
              </span>
              <span className="font-semibold">mepo</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="h-9 text-sm md:h-8 md:text-xs">
            App
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1 md:gap-0">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    className={mobileNavButtonClassName}
                    isActive={
                      item.to === '/'
                        ? pathname === '/'
                        : pathname.startsWith(item.to)
                    }
                    tooltip={item.title}
                    render={<Link to={item.to} />}
                    onClick={closeMobileNav}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              disabled
              tooltip="Placeholder"
              className={mobileNavButtonClassName}
            >
              <span className="text-muted-foreground">Placeholder account</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
