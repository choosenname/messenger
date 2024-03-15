import { Server, Member, User } from "@prisma/client"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & { user: User })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
    socket: Socket & {
        server: NetServer & {
            io: SocketIOServer;
        };
    };
};