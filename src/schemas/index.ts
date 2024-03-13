import {z} from "zod"

export const SettingsSchema = z.object({
    name: z.optional(z.string().min(3)),
})

export const LoginSchema = z.object({
    name: z.string().min(3),
    password: z.string().min(3),
})

export const RegisterSchema = z.object({
    name: z.string().min(3),
    password: z.string().min(3),
})

export const serverSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    imageUrl: z.string().url(),
})