'use server'

import {z} from "zod";
import {LoginSchema} from "@/schemas";
import {signIn} from "@/auth";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {AuthError} from "next-auth";
import {getUserByName} from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields"}
    }

    const {name, password} = validatedFields.data;

    const existingUser = await getUserByName(name);

    if (!existingUser || !existingUser.name || !existingUser.password) {
        return {error: "User does not exist"};
    }

    try {
        await signIn("credentials", {
            name,
            password,
            redirectTo: /*callbackUrl ||*/ DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials"}
                default:
                    return {error: "Something went wrong"}
            }
        }

        throw error;
    }
}