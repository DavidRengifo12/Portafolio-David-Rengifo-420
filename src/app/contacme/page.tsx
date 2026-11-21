'use client'
import FormField from "@/src/components/FormFiel";
import { motion } from "motion/react"


export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-6" style={{backgroundImage: "url('fondoc.jpg')"}}>

      <motion.section 
      initial={{ opacity: 0, x:-50}}
      whileInView={{ opacity: 1, x:0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="w-full max-w-md rounded-2xl backdrop-blur-md bg-white/10 shadow-lg p-6 sm:p-8">

        <header className="mb-6">
          <h1 className="text-2xl font-light text-white font-mono">
            Ponte en contacto conmigo
          </h1>
        </header>

        <form className="flex flex-col gap-5">

          <FormField
            label="Nombre"
            name="name"
            placeholder="Ingresa tu nombre"
          />

          <FormField
            label="Correo electrónico"
            name="email"
            type="email"
            placeholder="Ingresa tu correo"
          />    

          <div className="flex flex-col gap-2 text-white">
            <label htmlFor="" className="font-mono">Asunto</label>
            <textarea 
            placeholder="Asunto"
            className="font-mono h-26 rounded-lg p-3 bg-white/10 border border-white/20 text-white"
            />
          </div>


          <button type="submit" className="rounded-xl border border-white/20 bg-white/10 p-4 font-mono text-gray-200 transition hover:bg-white/20">
            Enviar mensaje
          </button>

        </form>
      </motion.section>
    </main>
  );
}