"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function TabBar({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="tab-bar"
      className={cn(
        "flex w-full items-center justify-between border-t bg-background px-2 py-1",
        className
      )}
      {...props}
    />
  )
}

function TabBarItem({
  className,
  active,
  icon,
  label,
  ...props
}: React.ComponentProps<"button"> & {
  active?: boolean
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      data-slot="tab-bar-item"
      data-active={active}
      className={cn(
        "flex flex-1 flex-col items-center gap-1 rounded-md py-1.5 text-[11px] text-muted-foreground transition-colors data-[active=true]:text-primary",
        className
      )}
      {...props}
    >
      <span data-slot="tab-bar-item-icon" className="flex size-5 items-center justify-center [&_svg]:size-5">
        {icon}
      </span>
      <span data-slot="tab-bar-item-label">{label}</span>
    </button>
  )
}

export { TabBar, TabBarItem }
