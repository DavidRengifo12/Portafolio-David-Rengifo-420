import{z} from 'zod'

export const formSchemass = z.object({
    name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(20,"El nombre es demasiado largo"),

    email: z.string().trim().email("Ingrese un correo electrónico válido"),

    subject: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").trim(),
})

export type contactFormData = z.infer<typeof formSchemass>