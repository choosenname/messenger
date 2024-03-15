import {redirect} from "next/navigation";

import {db} from "@/lib/db";
import {currentUser} from "@/lib/auth";

interface InviteCodePageProps {
    params: {
        inviteCode: string;
    };
}

const InviteCodePage = async ({params
}: InviteCodePageProps) => {
    const user = await currentUser();

    if (!user || !user.id) {
        //TODO check in it necessary
        //     return redirectToSignIn();
        return redirect("/auth/login");
    }

    if (!params.inviteCode) {
        return redirect("/");
    }

    const existingServer = await db.server.findFirst({
        where: {
            inviteCode: params.inviteCode,
            members: {
                some: {
                    userId: user.id
                }
            }
        }
    });

    if (existingServer) {
        return redirect(`/servers/${existingServer.id}`);
    }

    const server = await db.server.update({
        where: {
            inviteCode: params.inviteCode,
        },
        data: {
            members: {
                create: [
                    {
                        userId: user.id,
                    }
                ]
            }
        }
    });

    if (server) {
        return redirect(`/servers/${server.id}`);
    }

    return null;
}

export default InviteCodePage;