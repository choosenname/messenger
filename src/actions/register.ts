'use server'

import {z} from "zod";
import {RegisterSchema} from "@/schemas";
import bcrypt from "bcryptjs";
import {db} from "@/lib/db";
import {getUserByName} from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    const {name , password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByName(name);

    if(existingUser) {
        return {error: "User name already in use"};
    }

    await db.user.create({
        data: {
            name,
            password: hashedPassword,
        }
    });

    return {success: "Success"};
}