
'use client'

import FormField from "@/src/components/FormFiel";

import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { contactFormData, formSchemass } from "@/src/schema/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contacto() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<contactFormData>({
    resolver: zodResolver(formSchemass)
  });

  const onSubmit = async (data: contactFormData) => {

    try {

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      toast.success("¡Mensaje enviado correctamente!")

      reset();

    } catch {

      //console.error("Error al enviar el mensaje:", error);

      toast.error("No se pudo enviar el mensaje. Inténtalo nuevamente.");

    }
  };

  return (
    <main className="w-full flex flex-col gap-5 pt-12">

      {/* Texto introductorio */}
      <header className="flex flex-col gap-2">

        <span className="group flex items-center gap-4">
          <div className="w-18 h-1 bg-card-foreground rounded-full my-5" />
          <p className="font-mono text-2xl">Ponte en contacto</p>
        </span>

        <h2 className="text-2xl font-bold font-mono text-foreground">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >

          {/* Nombre */}
          <FormField
            label="Nombre y Apellido"
            placeholder="Ingresa tu nombre"
            {
              ...register("name")
            }
            
          />
          {
            errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )
          }

          {/* Correo electrónico */}
          <FormField
            label="Correo Electronico"
            
            type="email"
            placeholder="Ingresa tu correo"
            {...register("email")}
            
          />
          {
            errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )
          }

          {/* Asunto */}
          <div className="flex flex-col gap-2 text-foreground">

            <label htmlFor="subject" className="font-mono">
              Descripcion de lo que quieres hacer
            </label>

            <textarea
              id="subject"
              placeholder="Cuéntame sobre tu proyecto..."
              {...register("subject")}
              className="font-mono h-26 rounded-lg p-3 bg-white/10 border border-border"
            />

            {errors.subject && (
              <span className="text-red-500 text-sm font-mono">
                {errors.subject.message}
              </span>
            )}

          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-button border p-4 font-mono text-foreground transition hover:bg-button-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>

        </form>

      </motion.section>

    </main>
  );
}
