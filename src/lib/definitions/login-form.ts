import { z } from 'zod'

export const loginFormSchema = z
    .object({
        email: z.string().email('Некорректный email.').trim(),
        password: z.string().trim(),
    })

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>
