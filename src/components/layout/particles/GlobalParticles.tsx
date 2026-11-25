"use client"

import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"

export default function GlobalParticles() {
  const { resolvedTheme } = useTheme()

  const color = resolvedTheme === "dark" ? "#ffffff" : "#18181b"

  return (
    <Particles
      className="fixed inset-0 -z-10 pointer-events-none"
      quantity={100}
      color={color}
      refresh
    />
  )
}
