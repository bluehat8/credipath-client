
"use client"

import * as React from "react"
import { Menu, X, ChevronLeft, ChevronRight} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "components/components/ui/sidebar"
import { Button } from "components/components/ui/button"

import { NewNavigationItems } from "./navigationConfig"
import { useNavigate } from "react-router-dom"



export function MainSidebar({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = React.useState("/")
  const [openMobile, setOpenMobile] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(true)
  const navigate = useNavigate();

  // Handle navigation
  const handleNavigation = (path: any) => {
    setCurrentPath(path)
    setOpenMobile(false)
    navigate(path);
  }

  // Check if a path is active
  const isActive = (path: any) => {
    return currentPath === path || currentPath.startsWith(`${path}/`)
  }

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }


  const toggleMobileSidebar = () => {
    setOpenMobile(!openMobile)
  }


  const renderSidebarContent = (isMobile = false) => (
    <SidebarContent className={isMobile ? "text-slate-50" : ""}>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {NewNavigationItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  isActive={isActive(item.path)}
                  onClick={() => handleNavigation(item.path)}
                  className="hover:bg-zinc-700 data-[active=true]:bg-zinc-700 text-slate-50"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
                {item.items && item.items.length > 0 && (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.id}>
                        <SidebarMenuSubButton
                          isActive={currentPath === subItem.path}
                          onClick={() => handleNavigation(subItem.path)}
                          className="hover:bg-zinc-700 data-[active=true]:bg-zinc-700 text-slate-50"
                        >
                          {subItem.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  )


  return (
    <SidebarProvider>
      <div className={`flex h-screen ${isOpen ? "md:w-64" : "md:w-20"}`} >
      {/* Mobile menu button */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMobileSidebar}
          aria-label={openMobile ? "Close menu" : "Open menu"}
          className="fixed top-4 left-4 z-50 md:hidden"
        >
          {openMobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile sidebar */}
        <div
          className={`md:hidden fixed inset-y-0 left-0 z-40 w-64 bg-zinc-800 transform transition-transform duration-300 ease-in-out ${openMobile ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Sidebar className="h-full flex flex-col text-slate-50">
            <SidebarHeader className="p-4 border-b border-zinc-700">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e0105872c3855e766fc1878bbbc5215aea591a49bb6cbdb3b7aad7e38cc5291c?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                  alt="CrediPath Logo"
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold text-slate-50">CREDIPATH</span>
              </div>
            </SidebarHeader>
            {renderSidebarContent(true)}
            <SidebarFooter className="p-4 mt-auto border-t border-zinc-700">
              <div className="text-xs text-slate-400">© 2025 CrediPath. All rights reserved.</div>
            </SidebarFooter>
          </Sidebar>
        </div>

        {/* Desktop sidebar */}
        <Sidebar
          className={`hidden md:flex bg-sidebar  text-slate-50 border-r border-zinc-700 transition-all duration-300 ease-in-out ${
            isOpen ? "w-64" : "w-20" 
          }`}
        
        >
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e0105872c3855e766fc1878bbbc5215aea591a49bb6cbdb3b7aad7e38cc5291c?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt="CrediPath Logo"
                className="h-8 w-8"
              />
              {isOpen && <span className="text-lg font-bold">CREDIPATH</span>}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {NewNavigationItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        isActive={isActive(item.path)}
                        onClick={() => handleNavigation(item.path)}
                        className="hover:bg-zinc-700 data-[active=true]:bg-zinc-700 hover:text-green-cpt"
                      >
                        <item.icon className="h-5 w-5" />
                        {isOpen && <span>{item.title}</span>}
                      </SidebarMenuButton>
                      {isOpen && item.items && item.items.length > 0 && (
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.id}>
                              <SidebarMenuSubButton
                                isActive={currentPath === subItem.path}
                                onClick={() => handleNavigation(subItem.path)}
                                className="hover:bg-zinc-700 data-[active=true]:bg-zinc-700"
                              >
                                {subItem.title}
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4 mt-auto">
            {isOpen && <div className="text-xs text-slate-400">© 2025 CrediPath. All rights reserved.</div>}
          </SidebarFooter>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-3 top-4 bg-zinc-800 border border-zinc-700"
            onClick={toggleSidebar}
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </Sidebar>

        
      </div>

       {/* Main content */}
       <main
          className={`flex-1 p-8 overflow-auto transition-all duration-300 ease-in-out ${isOpen ? "md:ml-5" : "md:ml-5"}`}
        >
          {children}
        </main>

        {/* Overlay for mobile */}
        {openMobile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMobileSidebar} />
        )}

    </SidebarProvider>
  )
}


