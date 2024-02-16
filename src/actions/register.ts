'use server'

import {z} from "zod";
import {RegisterSchema} from "@/schemas";
import bcrypt from "bcrypt";
import {db} from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    const {name , password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where: {
            name,
        }
    });

    if(existingUser) {
        return {error: "Username already in use"};
    }

    await db.user.create({
        data: {
            name,
            password: hashedPassword,
        }
    });

    return {success: "Success"};
}