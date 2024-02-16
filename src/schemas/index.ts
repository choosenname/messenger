import {z} from "zod"

export const LoginSchema = z.object({
    name: z.string().min(3),
    password: z.string().min(3),
})

export const RegisterSchema = z.object({
    name: z.string().min(3),
    password: z.string().min(3),
})