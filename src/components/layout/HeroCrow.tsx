/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function HeroCrow() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const rotate = useMotionValue(0)

  // Movimiento suave y orgánico sin saturar el render
  const springConfig = { damping: 24, stiffness: 120, mass: 0.6 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const currentX = x.get()
      const currentY = y.get()

      const deltaX = e.clientX - currentX
      const deltaY = e.clientY - currentY

      // Solo rotamos si el desplazamiento es perceptible para evitar temblores
      if (Math.hypot(deltaX, deltaY) > 2) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
        rotate.set(angle + 45)
      }

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, rotate, x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 -translate-x-1/2 -translate-y-1/2"
      style={{ x, y, rotate }}
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <img
        src="/crow.svg"
        alt="imagen"
        className="h-12 w-12 select-none"
        style={{
          filter:
            'drop-shadow(0 0 18px rgba(220, 38, 38, 0.65)) drop-shadow(0 0 36px rgba(153, 27, 27, 0.35))',
        }}
      />
    </motion.div>
  )
}