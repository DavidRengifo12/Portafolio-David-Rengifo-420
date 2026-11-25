
'use client'

import FormField from "@/src/components/FormFiel";
import { motion } from "motion/react"

export default function Contacto() {
  return (
    <main className="w-full flex flex-col gap-5 pt-12">

      {/* Texto introductorio */}
      <header className="flex flex-col gap-2">
        <span className="group flex items-center gap-4">
          <div className="w-18 h-1 bg-blue-400 rounded-full my-5" /> 
          <p className="font-mono text-2xl">Ponte en contacto</p>
        </span>
        <h2 className="text-3xl font-bold font-mono text-foreground">
          Vamos a construir algo juntos
        </h2>

        <p className="text-xl text-muted-foreground font-mono">
          ¿Tienes alguna propuesta, proyecto o pregunta?
          Estaré encantado de conocer tus ideas y colaborar contigo.
        </p>
      </header>

      {/* Formulario */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="w-full rounded-2xl backdrop-blur-md bg-card shadow-lg p-6 sm:p-8"
      >

        <header className="mb-6">
          <h3 className="text-xl font-light text-foreground font-mono">
            Ingresa tus datos
          </h3>
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

          <div className="flex flex-col gap-2 text-foreground">
            <label htmlFor="subject" className="font-mono">
              Asunto
            </label>

            <textarea
              id="subject"
              name="subject"
              placeholder="Cuéntame sobre tu proyecto..."
              className="font-mono h-26 rounded-lg p-3 bg-white/10 border border-border"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-button border p-4 font-mono text-foreground transition hover:bg-white/20"
          >
            Enviar mensaje
          </button>

        </form>
      </motion.section>
    </main>
  );
}
