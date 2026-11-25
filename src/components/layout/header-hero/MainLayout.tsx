'use client'

import Header from './Header'
import GlobalParticles from '../particles/GlobalParticles'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* Fondo global de partículas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GlobalParticles />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <Header />

        <main className="sm:pt- relative min-h-[calc(100dvh-80px)]">
          {children}
        </main>
      </div>

    </div>
  )
}