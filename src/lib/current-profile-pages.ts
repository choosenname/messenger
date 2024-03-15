import { NextApiRequest } from "next";

import { db } from "@/lib/db";
import {currentUser} from "@/lib/auth";

export const currentUserPages = async (req: NextApiRequest) => {
    const sessionUser  = await currentUser();

    if (!sessionUser) {
        return null;
    }

    const user = await db.user.findUnique({
        where: {
            id: sessionUser.id
        }
    });

    return user;
}