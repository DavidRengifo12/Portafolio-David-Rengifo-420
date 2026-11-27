
'use client'

import { motion } from 'motion/react'

import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../animations/variantAnimations'
import HeroMetadata from './HeroMetaData'
import CardTerminal from '../../sections/CardTerminal/CardTerminal'


export default function Hero() {
  return (
    <div
      className=" text-foreground"
      
    >
      <div className="mx-auto w-full max-w-7xl px-4">

        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-screen p-4">

          <motion.article
            className="flex flex-col gap-4 mt-8 md:mt-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <HeroMetadata />

            <motion.h4
              className="text-xl md:text-2xl text-foreground font-mono"
              variants={fadeUp}
            >
              Hi, Im David Rengifo
            </motion.h4>

            <motion.h1
              variants={fadeUp}
              className="text-xl md:text-3xl font-bold text-foreground font-mono"
            >
              IM A FULL-STACK DEVELOPER
              <span> AND MOBILE DEVELOPER </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-foreground text-xl md:text-2xl font-mono"
            >
              NO SOLO CONSTRUYO SOLUCIONES, SIEMPRE BUSCO NUEVAS FORMAS DE HACERLAS MEJORES.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex gap-2"
            >
              <a
                href="/CV-David.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                  rounded-xl border border-border
                  bg-button p-4 text-foreground
                  transition-colors hover:bg-background font-mono
                "
              >
                Ver CV <ArrowRight />
              </a>
            </motion.div>

          </motion.article>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:flex items-center justify-center"
          > 
            <CardTerminal
              command="David Santiago Rengifo :)"
              messages={[
                "Desarrollador Full Stack Junior",
                "Desarrollo de aplicaciones web",
                "Desarrollo de aplicaciones móviles",
                "Creación de soluciones digitales",
                "Enfoque en código limpio",
                "Aprendizaje constante",
                "Apasionado por la tecnología",
                "Transformando ideas en soluciones"
              ]}
            />
          </motion.div>

        </section>
      </div>
    </div>
  )
}
