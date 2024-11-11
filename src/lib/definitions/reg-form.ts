import { z } from 'zod'

export const regFormSchema = z
    .object({
        email: z.string().email('Некорректный email.').trim(),
        password: z.string().min(6, 'Пароль слишком короткий.')
            .regex(/[a-zA-Z]/, { message: 'Пароль должен содержать хотя бы одну букву.' })
            .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру.' })
            .regex(/[^a-zA-Z0-9]/, {
                message: 'Пароль должен содержать хотя бы один специальный символ.',
            }).trim(),
        confirmPassword: z.string().min(6, 'Повторите пароль.')
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Введенные пароли не совпадают',
    })

export type RegFormSchemaType = z.infer<typeof regFormSchema>
