import React from 'react';
import {InitialModal} from "@/components/modals/initial-modal";
import {currentUser} from "@/lib/auth";
import {db} from "@/lib/db";
import {redirect} from "next/navigation";

const SetupPage = async () => {
    const user = await currentUser();

    if(user) {
        const server = await db.server.findFirst({
            where: {
                members: {
                    some: {
                        userId: user.id
                    }
                }
            }
        });

        if (server) {
            return redirect(`/server/${server.id}`);
        }
    }

    return <InitialModal />;
}

export default SetupPage;
