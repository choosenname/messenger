"use server"

import {SettingsSchema} from "@/schemas";
import {z} from "zod";
import {currentUser} from "@/lib/auth";
import {getUserById} from "@/data/user";
import {db} from "@/lib/db";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const user = await currentUser();

    if (!user) {
        return {error: "Unauthorized"}
    }

    const dbUser = await getUserById(user.id!);

    if (!dbUser) {
        return {error: "Unauthorized"}
    }

    await db.user.update({
        where: {id: dbUser.id},
        data: {
            ...values
        }
    })

    return {success: "Settings updated"}
}