'use client'

import HeroMetadata from './HeroMetaData'
import {motion} from 'motion/react'
import { fadeUp, staggerContainer } from '../animations/variantAnimations'


export default function Hero() {
  return (
    <div style={{backgroundImage: "url('fondoc.jpg')"}}>
    <div className='mx-auto w-full max-w-7xl px-4'>
    <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-screen p-4'>
      <motion.article className='flex flex-col gap-2 mt-16 md:mt-2' variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}}>
        <HeroMetadata />
        <motion.h4 className='font-mono text-xl text-gray-200' variants={fadeUp}>Hi, I`m David Rengifo</motion.h4>

        <motion.h1 variants={fadeUp} className='font-mono text-xl md:text-2xl font-bold text-gray-400'>I`M A FULL-STACK DEVELOPER <span> AND MOBILE DEVELOPER </span></motion.h1>

        <motion.p variants={fadeUp} className='font-mono text-gray-200 md:text-3xl'>NO SOLO CONSTRUYO SOLUCIONES, SIEMPRE BUSCO NUEVAS FORMAS DE HACERLAS MEJORES.</motion.p>

        <motion.div variants={fadeUp} className='flex gap-2'>
            <button className='bg-white/10 p-4 border rounded-xl text-gray-200 font-mono'>Ver CV</button>
        </motion.div>
      </motion.article>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once: true}} className='hidden md:flex items-center justify-center'>
        <motion.img
        variants={fadeUp}
        src="/davids.png" // ruta local
        alt="Foto de perfil"
        width={600}
        height={600}
        className='h-auto w-full object-cover'
        />
      </motion.div>
    </section>
    </div>
    </div>
  )
}
