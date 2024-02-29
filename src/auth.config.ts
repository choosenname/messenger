import {AuthError, NextAuthConfig} from "next-auth"
import Credentials from "next-auth/providers/credentials";
import {LoginSchema} from "@/schemas";
import {getUserByName} from "@/data/user";
import bcrypt from "bcryptjs";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields
                    = LoginSchema.safeParse(credentials);

                if(validatedFields.success) {
                    const {name, password} = validatedFields.data;

                    const user = await getUserByName(name);
                    if(!user) return null;

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if(passwordMatch) return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig